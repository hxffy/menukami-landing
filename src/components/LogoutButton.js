import { useUser } from '@auth0/nextjs-auth0'
import { useState } from 'react'
import { AiOutlineFund, AiOutlineLogout, AiOutlineShop } from 'react-icons/ai'
import onClickOutside from 'react-onclickoutside'

const MenuLink = ({ icon, href, text, className }) => {
  return (
    <a
      className={`flex space-x-2 items-center hover:text-gray-900 w-full p-2 ${className} hover:bg-gray-100`}
      href={href}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </a>
  )
}

const Menu = () => {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  Menu.handleClickOutside = () => setIsOpen(false)

  const menuClass = isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-0 opacity-0'

  return (
    <div className="flex items-start relative z-50">
      <div className="focus:outline-none text-gray-600">
        <button
          onClick={() => setIsOpen((old) => !old)}
          className="flex items-center space-x-4 w-10 h-10"
        >
          <img
            src={user.picture}
            className="w-10 h-10 rounded-full border-2 border-gray-300"
            alt={`Profile`}
          />
        </button>
        <div
          className={`bg-white absolute right-0 top-full mt-2 rounded-lg border border-gray-100 shadow-xl transition-all duration-300 transform origin-top-right w-72 ${menuClass}`}
        >
          <div className="p-4 flex items-start space-x-2">
            <img
              src={user.picture}
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              alt={`Profile`}
            />
            <div className="flex flex-col truncate">
              <span className="text-left font-bold">{user.username ?? user.name}</span>
              <span className="text-left truncate">{user.email}</span>
              {!user.email_verified ? (
                <small className="bg-yellow-100 text-yellow-500 text-center rounded-full px-3 py-1 mt-2 text-xs">
                  Email not verified
                </small>
              ) : null}
            </div>
          </div>
          <MenuLink text="Outletku" href="/admin" icon={<AiOutlineShop />} />
          <MenuLink
            text="Penagihan & Penggunaan"
            href="/admin/settings/billing"
            icon={<AiOutlineFund />}
          />
          <MenuLink
            text="Log out"
            href="/api/auth/logout"
            className="border-t border-gray-100"
            icon={<AiOutlineLogout />}
          />
        </div>
      </div>
    </div>
  )
}

const EnhancedMenu = onClickOutside(Menu, {
  excludeScrollbar: true,
  handleClickOutside: () => Menu.handleClickOutside,
})
export default function LogoutButton() {
  return (
    <span className="flex items-center">
      <EnhancedMenu />
    </span>
  )
}
