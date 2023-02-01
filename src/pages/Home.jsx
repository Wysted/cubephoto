import Card from '../components/Card.jsx'
import { useGetCubePhotos } from '../hooks/useGetCubePhotos'

function Home(){
    
    const { cubePhoto } = useGetCubePhotos()

    const newDate = (date) =>{
        const parts = date.split(" ")
        const _newDate = parts[0]
        return _newDate
    }
    return (
        <div className="grid gap-6 mt-2 h-1/2 items-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
            >
            {
                cubePhoto && 
                cubePhoto.map((item,index) => {
                    
                    return <Card 
                            key = {item.id}
                            name = {item.name}
                            title = {item.title}
                            x = {item.x}
                            y = {item.y}
                            z = {item.z}
                            descrip = {item.description}
                            created = {newDate(item.created)}
                            img = {item.pic}
                            id = {item.id}

                            />
                })
            }
        </div>
    );
}

export default Home