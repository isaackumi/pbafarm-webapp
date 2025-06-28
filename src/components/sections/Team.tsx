import { siteContent } from '@/data/content';
import { User, Users, Award, Briefcase, Fish } from 'lucide-react';

function MemberCard({ name, role, bio, color = "bg-gradient-primary" }: { name: string; role: string; bio?: string; color?: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-blue-100 card-hover flex flex-col h-full">
            <div className="relative h-56 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className={`w-24 h-24 ${color} rounded-full flex items-center justify-center shadow-large group-hover:scale-110 transition-transform duration-700`}>
                    <User className="w-12 h-12 text-white" />
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-500" /> {name}
                </h3>
                <p className="text-blue-600 font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" /> {role}
                </p>
                {bio && <p className="text-gray-600 mb-4 line-clamp-2">{bio}</p>}
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section id="team" className="py-24 bg-gradient-to-br from-blue-50 via-red-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                        <Users className="w-8 h-8 text-blue-500" /> Our Team
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated team of aquaculture experts and professionals.
                    </p>
                </div>

                {/* CEO */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                        <Award className="w-6 h-6 text-blue-400" /> CEO & Founder
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MemberCard
                            name={siteContent.team.ceo.name}
                            role={siteContent.team.ceo.title}
                            bio={siteContent.team.ceo.bio}
                            color="bg-gradient-primary"
                        />
                    </div>
                </div>

                {/* Management Team */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-blue-400" /> Management Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteContent.team.management.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                color={index % 2 === 0 ? "bg-gradient-secondary" : "bg-gradient-accent"}
                            />
                        ))}
                    </div>
                </div>

                {/* Staff */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                        <Fish className="w-6 h-6 text-blue-400" /> Our Staff
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.team.staff.map((member, index) => (
                            <MemberCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                color={index % 3 === 0 ? "bg-gradient-primary" : index % 3 === 1 ? "bg-gradient-secondary" : "bg-gradient-accent"}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Our Team
                    </a>
                </div>
            </div>
        </section>
    );
} 