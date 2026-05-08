import ProfileClient from "@/app/(pages)/profile/profile-client";
import { getProfile } from "@/app/actions/get-profile";
import { auth } from "@/app/lib/auth";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return;

  const profileData = await getProfile();
  const subjectsData = profileData.subjects;

  return <ProfileClient user={profileData} subjectsData={subjectsData} />;
}
