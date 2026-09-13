import type { Technology } from '../type';
import{toast} from "react-toastify"

interface StackProps {
    stack: Technology[];
    setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const Stack = ({ stack, setStack }: StackProps) => {

    const handleRemove = (id: string) => {
        setStack(stack.filter((tech) => tech.id !== id));
        
    };

    return (
        <div className=' border p-8 m-2 md: border-gray-200 shadow rounded-xl p-5 sticky top-20'>

            <div className='mb-5'>
                <h2 className='text-[25px] font-bold '>
                    My Stack
                </h2>

                <p className='text-[14px] '>
                    {stack.length} Technologies Selected
                </p>

            </div>
    
            {stack.length === 0 ? (
                <p className='text-gray-500 text-[13px]  text-center border border-dashed p-4 border-gray-200 rounded-[5px]'>
                   Your Stack is empty
                </p>
                  ) : (
                <div className='space-y-3'>

                    {stack.map((tech) => (
                        <div
                            key={tech.id}
                            className='border border-gray-200 rounded-lg p-3 flex items-center justify-between'
                        >

              <div className='flex items-center gap-3'>
                 <img  src={tech.icon} alt={tech.name} className='w-10 h-10' />

              <div>
                  <h3 className='font-semibold'>{tech.name} </h3>

                <p className='text-xs text-gray-500'>
                                        {tech.category} </p>
             </div>
                </div>

                <button onClick={() => handleRemove(tech.id)}
                     className='text-gray-500  font-light text-2xl pr-3 hover:text-[#DB2777]' 
                            >
                              x
                            </button>
                            
                        </div>

                        
                    ))}
                 {stack.length > 0 && (
               <button
                   onClick={() => {
                    setStack([]);
                    toast.success("All technologies removed");
                         }}
                   className="btn w-full mt-4 text-[#DB2777]">  Remove All </button>
)}

                </div>
            )}
            

        </div>
    );
};

export default Stack;