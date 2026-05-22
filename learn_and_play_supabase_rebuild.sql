-- Learn & Play Supabase rebuild SQL
-- Run this in a NEW Supabase project's SQL Editor.
-- This recreates the database tables, triggers, policies, storage bucket, and realtime settings from the source project migrations.
-- It does NOT restore old users or old data from the previous Supabase project.
-- IMPORTANT: Create the Auth user javier@littlekids.care in Supabase Authentication AFTER this runs, then run the admin UPDATE at the bottom.



-- =========================================================
-- Migration: 20250710021821-4fcd9605-d1a7-4834-81e9-ee8f80b7e533.sql
-- =========================================================

-- Create user profiles table for additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'parent' CHECK (role IN ('parent', 'therapist', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create children table for storing child information
CREATE TABLE public.children (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  age INTEGER,
  birth_date DATE,
  autism_level TEXT CHECK (autism_level IN ('level_1', 'level_2', 'level_3')),
  interests TEXT[],
  sensory_preferences JSONB,
  communication_style TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for avatars
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true) ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.children ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policies for children
CREATE POLICY "Parents can view their own children" 
ON public.children 
FOR SELECT 
USING (parent_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Parents can insert their own children" 
ON public.children 
FOR INSERT 
WITH CHECK (parent_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Parents can update their own children" 
ON public.children 
FOR UPDATE 
USING (parent_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Parents can delete their own children" 
ON public.children 
FOR DELETE 
USING (parent_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- Create storage policies for avatars
CREATE POLICY "Avatar images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_children_updated_at
  BEFORE UPDATE ON public.children
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- SKIPPED duplicate migration: 20250711004711-1c3651b5-36bb-4a33-b317-121ea190b828.sql


-- =========================================================
-- Migration: 20250711031813-0519f998-2afd-485e-a377-bf6ee700f31d.sql
-- =========================================================

-- Add missing fields to children table for complete assessment data
ALTER TABLE public.children 
ADD COLUMN IF NOT EXISTS diagnosis_date DATE,
ADD COLUMN IF NOT EXISTS current_support TEXT[],
ADD COLUMN IF NOT EXISTS primary_goals TEXT;


-- =========================================================
-- Migration: 20250711032154-27723c27-19e0-4d04-a0d4-a60adc432073.sql
-- =========================================================

-- Add all missing assessment fields to properly save complete form data
ALTER TABLE public.children 
ADD COLUMN IF NOT EXISTS communication_methods TEXT[],
ADD COLUMN IF NOT EXISTS understanding_level TEXT,
ADD COLUMN IF NOT EXISTS communication_goals TEXT,
ADD COLUMN IF NOT EXISTS social_interaction_level TEXT,
ADD COLUMN IF NOT EXISTS social_skills_present TEXT[],
ADD COLUMN IF NOT EXISTS social_challenges TEXT,
ADD COLUMN IF NOT EXISTS self_care_skills JSONB,
ADD COLUMN IF NOT EXISTS sleep_patterns TEXT,
ADD COLUMN IF NOT EXISTS daily_living_priorities TEXT;


-- =========================================================
-- Migration: 20250711034112-4752ab38-bc59-433d-a4d9-cc5ae535d9ac.sql
-- =========================================================

-- Create table for AI-generated activities
CREATE TABLE public.ai_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  duration TEXT NOT NULL,
  age_range TEXT NOT NULL,
  materials TEXT[] NOT NULL DEFAULT '{}',
  skills TEXT[] NOT NULL DEFAULT '{}',
  instructions JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for activity sessions (when someone starts/completes an activity)
CREATE TABLE public.activity_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  activity_id UUID REFERENCES public.ai_activities(id) ON DELETE CASCADE,
  activity_title TEXT NOT NULL, -- Store title in case it's a static activity
  activity_category TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'started', -- started, completed, abandoned
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  notes TEXT,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ai_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for ai_activities
CREATE POLICY "Parents can view their children's AI activities" 
ON public.ai_activities 
FOR SELECT 
USING (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

CREATE POLICY "Parents can insert AI activities for their children" 
ON public.ai_activities 
FOR INSERT 
WITH CHECK (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

CREATE POLICY "Parents can update their children's AI activities" 
ON public.ai_activities 
FOR UPDATE 
USING (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

CREATE POLICY "Parents can delete their children's AI activities" 
ON public.ai_activities 
FOR DELETE 
USING (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

-- Create policies for activity_sessions
CREATE POLICY "Parents can view their children's activity sessions" 
ON public.activity_sessions 
FOR SELECT 
USING (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

CREATE POLICY "Parents can insert activity sessions for their children" 
ON public.activity_sessions 
FOR INSERT 
WITH CHECK (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

CREATE POLICY "Parents can update their children's activity sessions" 
ON public.activity_sessions 
FOR UPDATE 
USING (child_id IN (
  SELECT id FROM public.children 
  WHERE parent_id IN (
    SELECT id FROM public.profiles 
    WHERE user_id = auth.uid()
  )
));

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_ai_activities_updated_at
BEFORE UPDATE ON public.ai_activities
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_activity_sessions_updated_at
BEFORE UPDATE ON public.activity_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_ai_activities_child_id ON public.ai_activities(child_id);
CREATE INDEX idx_ai_activities_category ON public.ai_activities(category);
CREATE INDEX idx_activity_sessions_child_id ON public.activity_sessions(child_id);
CREATE INDEX idx_activity_sessions_status ON public.activity_sessions(status);
CREATE INDEX idx_activity_sessions_completed_at ON public.activity_sessions(completed_at);


-- =========================================================
-- Migration: 20250711051625-196db86f-d519-4df7-96e9-d11a41c1dd40.sql
-- =========================================================

-- Create messages table for community chat
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_deleted BOOLEAN NOT NULL DEFAULT false,
  mentions UUID[] DEFAULT '{}'::UUID[]
);

-- Enable Row Level Security
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policies for messages
CREATE POLICY "Parents can view all messages" 
ON public.messages 
FOR SELECT 
USING (NOT is_deleted AND parent_id IN ( 
  SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()
) OR EXISTS (
  SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid()
));

CREATE POLICY "Parents can insert their own messages" 
ON public.messages 
FOR INSERT 
WITH CHECK (parent_id IN ( 
  SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()
));

CREATE POLICY "Parents can update their own messages" 
ON public.messages 
FOR UPDATE 
USING (parent_id IN ( 
  SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()
));

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_messages_updated_at
BEFORE UPDATE ON public.messages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for messages
ALTER publication supabase_realtime ADD TABLE public.messages;
ALTER TABLE public.messages REPLICA IDENTITY FULL;


-- =========================================================
-- Migration: 20250711051729-71cb9f0e-80d6-4bf3-890d-2dae40fc3f59.sql
-- =========================================================

-- Add foreign key constraint for messages table
ALTER TABLE public.messages 
ADD CONSTRAINT messages_parent_id_fkey 
FOREIGN KEY (parent_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


-- =========================================================
-- Migration: 20250711054151-c84eeebb-a65a-4b1a-88bd-6f89b4daca3e.sql
-- =========================================================

-- Create table for AI conversation history
CREATE TABLE public.ai_conversations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  parent_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  message_content text NOT NULL,
  response_content text NOT NULL,
  message_tokens integer DEFAULT 0,
  response_tokens integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ai_conversations ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Parents can view their own AI conversations" 
ON public.ai_conversations 
FOR SELECT 
USING (parent_id IN ( SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()));

CREATE POLICY "Parents can insert their own AI conversations" 
ON public.ai_conversations 
FOR INSERT 
WITH CHECK (parent_id IN ( SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()));

CREATE POLICY "Parents can update their own AI conversations" 
ON public.ai_conversations 
FOR UPDATE 
USING (parent_id IN ( SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()));

CREATE POLICY "Parents can delete their own AI conversations" 
ON public.ai_conversations 
FOR DELETE 
USING (parent_id IN ( SELECT profiles.id FROM profiles WHERE profiles.user_id = auth.uid()));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ai_conversations_updated_at
BEFORE UPDATE ON public.ai_conversations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_ai_conversations_child_parent ON public.ai_conversations(child_id, parent_id);
CREATE INDEX idx_ai_conversations_created_at ON public.ai_conversations(created_at DESC);


-- =========================================================
-- Migration: 20250711190819-af91f536-0bfd-4e13-994f-b01c6dc49964.sql
-- =========================================================

-- Create subscribers table to track subscription and trial information
CREATE TABLE public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  subscribed BOOLEAN NOT NULL DEFAULT false,
  subscription_tier TEXT,
  subscription_end TIMESTAMPTZ,
  trial_active BOOLEAN NOT NULL DEFAULT false,
  trial_start TIMESTAMPTZ,
  trial_end TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own subscription info
CREATE POLICY "select_own_subscription" ON public.subscribers
FOR SELECT
USING (user_id = auth.uid() OR email = auth.email());

-- Create policy for edge functions to update subscription info
CREATE POLICY "update_own_subscription" ON public.subscribers
FOR UPDATE
USING (true);

-- Create policy for edge functions to insert subscription info
CREATE POLICY "insert_subscription" ON public.subscribers
FOR INSERT
WITH CHECK (true);

-- Create function to automatically start trial when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user_trial()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.subscribers (
    user_id, 
    email, 
    trial_active, 
    trial_start, 
    trial_end
  ) VALUES (
    NEW.id, 
    NEW.email, 
    true, 
    now(), 
    now() + interval '14 days'
  );
  RETURN NEW;
END;
$$;

-- Create trigger to start trial on user registration
CREATE TRIGGER on_auth_user_trial_start
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.handle_new_user_trial();


-- =========================================================
-- Migration: 20250711192205-9696f055-d218-48c4-bd4b-1dec768d96b3.sql
-- =========================================================

-- Create notifications table for in-app mentions
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  message_id UUID NOT NULL REFERENCES public.messages(id) ON DELETE CASCADE,
  mentioned_by_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own notifications
CREATE POLICY "Users can view their own notifications" 
ON public.notifications 
FOR SELECT 
USING (user_id = auth.uid());

-- Create policy for users to update their own notifications (mark as read)
CREATE POLICY "Users can update their own notifications" 
ON public.notifications 
FOR UPDATE 
USING (user_id = auth.uid());

-- Create policy for inserting notifications (when someone mentions another user)
CREATE POLICY "Users can create notifications for mentions" 
ON public.notifications 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_notifications_updated_at
BEFORE UPDATE ON public.notifications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for notifications
ALTER TABLE public.notifications REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;


-- SKIPPED duplicate migration: 20250713125258-9daee3d7-46c0-4e8e-ad94-d6e6fcf81e44.sql


-- =========================================================
-- Migration: 20250713125449-53d2897a-945c-4b90-ae0d-81c879c30afa.sql
-- =========================================================

-- Update the profiles RLS policy to allow users to view other users' basic info
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Allow users to view basic profile information of all users (for community features)
CREATE POLICY "Users can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Users can only update their own profile
-- (keeping the existing update policy unchanged)


-- =========================================================
-- AFTER YOU CREATE THE USER IN SUPABASE AUTHENTICATION
-- =========================================================
-- 1) Go to Authentication > Users > Add user
-- 2) Email: javier@littlekids.care
-- 3) Password: 123456  (change after testing)
-- 4) Then run this UPDATE in SQL Editor to make Javier admin:

UPDATE public.profiles
SET role = 'admin', full_name = COALESCE(full_name, 'Javier')
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'javier@littlekids.care' LIMIT 1
);

-- Verify:
SELECT p.id, u.email, p.full_name, p.role
FROM public.profiles p
JOIN auth.users u ON u.id = p.user_id
WHERE u.email = 'javier@littlekids.care';
