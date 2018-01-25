const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const overlayImage = overlay.querySelector('img')
const overlayClose = overlay.querySelector('.close')


const UserImageDisplay = (props) =>{

    function generateHTML([h, v]) {
        return 
        `
        <div class='item h${h} v${v}'>
            <img src=${props.img}/>
            <div class="item__overlay">
                <button>View</button>
            </div>
        </div>    
        `
        
    }  
    function randomNumber(limit){
        return Math.floor(Math.random*limit) + 1
    }  
}

export default UserImageDisplay