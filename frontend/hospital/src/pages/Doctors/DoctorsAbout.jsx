import { formatDate } from '../../utils/formatDate'
const DoctorsAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingBg font-semibold flex items-center gap-2'>About of  <span className='text-iris font-bold text-[24px]'>Muhibur Rahman</span>
            </h3>

            <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis quae sed sapiente ab aliquam nobis iusto porro, eius, dignissimos inventore error asperiores! Excepturi, praesentium? Fugiat quas dignissimos autem consequuntur.</p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingBg font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-iris text-[15px] leading-6 font-semibold'> 
                            {formatDate("09-13-2014")} - {formatDate("09-13-2016")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textcol'>PHD in surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textcol'>
                        New Apollo Hospital, New York.
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-iris text-[15px] leading-6 font-semibold'>
                            {formatDate("07-04-2010")} - {formatDate("09-13-2014")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textcol'>PHD in surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textcol'>
                        New Apollo Hospital, New York.
                    </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingBg font-semibold'>Experience</h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellow text-[15px] leading-6 font-semibold'>
                    {formatDate("07-04-2010")} - {formatDate("09-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textcol'>
                        Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium text-textcol'>
                        New Apollo Hospital, New York.
                    </p>
                </li>

                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellow text-[15px] leading-6 font-semibold'>
                    {formatDate("07-04-2010")} - {formatDate("09-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textcol'>
                        Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium text-textcol'>
                        New Apollo Hospital, New York.
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorsAbout