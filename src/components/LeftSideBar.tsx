
import {
  Bookmark,
  Bot,
  Building,
  FileText,
  Home,
  MessageSquare,
  MessageSquareIcon,
  Tag,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-48 shrink-0 border-r bg-white shadow-sm md:block lg:w-64">
      <nav className="p-2 lg:p-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Home className="w-4 h-4 mr-2 lg:mr-3" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <MessageSquareIcon className="w-4 h-4 mr-2 lg:mr-3" />
              Questions
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Bot className="w-4 h-4 mr-2 lg:mr-3" />
              AI Assist
              <Badge variant="secondary" className="ml-auto text-xs">
                Labs
              </Badge>
            </Link>
          </li>
          <li>
            <Link
              href="/tags"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Tag className="w-4 h-4 mr-2 lg:mr-3" />
              Tags
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Users className="w-4 h-4 mr-2 lg:mr-3" />
              Users
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Bookmark className="w-4 h-4 mr-2 lg:mr-3" />
              Saves
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Trophy className="w-4 h-4 mr-2 lg:mr-3" />
              Challenges
              <Badge
                variant="secondary"
                className="ml-auto text-xs bg-orange-100 text-orange-800"
              >
                NEW
              </Badge>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2 lg:mr-3" />
              Chat
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <FileText className="w-4 h-4 mr-2 lg:mr-3" />
              Articles
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
            >
              <Building className="w-4 h-4 mr-2 lg:mr-3" />
              Companies
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
