const FilterSection = () => (
    <div className='mx-auto px-5 py-24 flex flex-col md:flex-row justify-around text-gray-600 items-center'>
      <p>Showing all 12 results</p>
  
      <div className='flex items-center gap-3'>
        <p>Views:</p>
        <img width="26" height="26" src="https://img.icons8.com/fluency-systems-filled/50/circled-menu.png" alt="circled-menu"/>
        <img width="26" height="26" src="https://img.icons8.com/ios/50/menu-squared-2.png" alt="menu-squared-2"/>
      </div>
  
      <div className='flex gap-3'>
        <input type="text" placeholder='Popularity' className='rounded-md border-gray-300 p-5 border-[2px]'/>
        <button className='px-[20px] py-[10px] font-bold bg-[#23A6F0] text-white rounded-md'>Filter</button>
      </div>
    </div>
  );
  
  export default FilterSection;
  