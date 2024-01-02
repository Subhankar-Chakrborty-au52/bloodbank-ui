import React from 'react'
import Layout from "./../../components/shared/layout/Layout"
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
        <div className="container">
            <div className="d-flex flex-column mt-4">
                <h1>
                    Welcome Admin <i className='text-success'>{user?.name}</i>
                </h1>
                <h3>Manage Blood Bank App</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti possimus nobis sed neque inventore soluta quo ut in quaerat molestiae at, veritatis cumque unde temporibus illo modi nostrum porro? Alias numquam at laboriosam minima modi sequi nam? Corporis, placeat nobis! Dignissimos nemo possimus laboriosam voluptatibus fuga harum nesciunt nostrum inventore? Deserunt voluptate suscipit iure! Quasi nemo sunt, voluptatem qui natus quia quod aliquid iusto sapiente eligendi at nostrum. Optio perspiciatis magnam ullam sapiente omnis repellendus, ad impedit qui itaque? Quibusdam voluptatibus, nam recusandae minima similique modi libero, nihil dolores beatae ipsa aliquid, exercitationem debitis sequi vitae veritatis non consectetur?
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default AdminHome