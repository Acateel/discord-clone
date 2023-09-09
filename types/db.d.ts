import { Member, Profile, Server } from '@prisma/client'

type ServerWithMemberWithProfiles = Server & {
  members: (Member & { profile: Profile })[]
}
