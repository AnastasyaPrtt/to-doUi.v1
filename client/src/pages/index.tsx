import { Layout } from '@/components/layout/Layout';
import { Global } from '@/styles/style';
import { Context } from '@/utils/context';
import userStore from '@/store/userStore';
import taskStore from '@/store/taskStore';


const Home = () => {
	return (
		<Context.Provider value={{
			user: new userStore(),
			task: new taskStore()
		}}>
			<Global />
			<Layout />
		</Context.Provider>
	)
}

export default Home