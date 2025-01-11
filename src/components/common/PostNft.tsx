import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, X } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import {   useSetRecoilState } from 'recoil';
import { popupState } from '../../libs/atoms';
import { toast, Toaster } from 'sonner';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { postNfts } from '../../Redux/main Data/nftsSlice';

 interface FormDataType {
  nftMint: string ;
  walletAddress:string | undefined
}

// interface NFTImageType {
//   file: File | null;
//   previewUrl: string | null;
// }

// interface CollectionOption {
//   value: string;
//   label: string;
// }

// const COLLECTION_OPTIONS: CollectionOption[] = [
//   { value: 'pepe', label: 'Pepe Collection' },
//   { value: 'cyber', label: 'Cyber Collection' },
//   { value: 'pixel', label: 'Pixel Collection' },
// ];

export const PostNft: React.FC = () => {
const dispatch = useDispatch<AppDispatch>()
    const setPostNft = useSetRecoilState(popupState);
  const wallet =  useWallet()

  // const [nftImage, setNftImage] = useState<NFTImageType>({
  //   file: null,
  //   previewUrl: null
  // });
  // const [nftBanner, setNftBanner] = useState<NFTImageType>({
  //   file: null,
  //   previewUrl: null
  // });
  const [formData, setFormData] = useState<FormDataType>({
    walletAddress:wallet.publicKey?.toString(),
    nftMint:""
  });
  // const [currentTag, setCurrentTag] = useState<string>('');
  

  
  // const addTag = (e: FormEvent): void => {
  //   e.preventDefault();
  //   // if (currentTag && !formData.tags.includes(currentTag)) {
  //   //   setFormData({
  //   //     ...formData,
  //   //     tags: [...formData.tags, currentTag]
  //   //   });
  //   //   setCurrentTag('');
  //   // }
  // };

  // const removeTag = (tagToRemove: string): void => {
  //   setFormData({
  //     ...formData,
  //     // tags: formData.tags.filter(tag => tag !== tagToRemove)
  //   });
  // }; 

  // const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
  //   const file = e.target.files?.[0];
  //   const feildName = e.target.name
  //   if (file) {
  //     // Store both the file and create a preview URL
  //     setFormData((prev)=>({
  //       ...prev,
  //      [feildName]:file
  //     }))
  //     if(feildName=='nftImage'){

  //       setNftImage({
  //         file,
  //         previewUrl: URL.createObjectURL(file)
  //       });
  //     } else{

  //       setNftBanner({
  //         file,
  //         previewUrl: URL.createObjectURL(file)
  //       });
  //     }
  //   }
  // };

  // const removeImage = (): void => {
  //   // Clean up the preview URL to prevent memory leaks
  //   if (nftImage.previewUrl) {
  //     URL.revokeObjectURL(nftImage.previewUrl);
  //   } if(nftBanner.previewUrl){
  //     URL.revokeObjectURL(nftBanner.previewUrl);

  //   }
  //   // if(formData.nftImage){
  //   //   setNftImage({
  //   //     file: null,
  //   //     previewUrl: null
  //   //   });
  //   // }
  //   // if(formData.nftBanner){

  //   //   setNftBanner({
  //   //     file: null,
  //   //     previewUrl: null
  //   //   });
  //   // }
  // };
 

    const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    console.log("name ",name);
    console.log("value  ", value);
    
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if(formData.nftMint==''||formData.walletAddress==''){
      toast.warning("Please enter the mint address")
      return
    }
    try {
     
      await dispatch(postNfts(formData)).unwrap()
      
     
    } catch (error) {
      console.error('Error creating NFT:', error);
    }
  };

  return (
    <div className=" relative bg-primary p-8">
      <Toaster  richColors className=' font-cpmono-heading'/>
      <X onClick={()=>setPostNft(false)} className=' cursor-pointer absolute right-3 top-3'  />
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 font-cpmono-heading">Post your NFT</h1>
        
        <form onSubmit={handleSubmit} className="bg-secondary rounded-lg border border-gray-700 p-8 font-cpmono-heading">
          <div className="  gap-8">
            {/* Image Upload Section */}
            {/* <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                NFT Image
              </label>
              <div className={`border-2 border-dashed border-gray-600 rounded-lg p-4 
                ${nftImage.previewUrl ? 'bg-gray-700' : 'bg-gray-800'} 
                hover:border-green-400 transition-colors duration-200`}>
                {nftImage.previewUrl ? (
                  <div className="relative">
                    <img 
                      src={nftImage.previewUrl} 
                      alt="NFT Preview" 
                      className="w-full h-full object-contain rounded"
                    />
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-gray-800 p-1 rounded-full"
                    >
                      <Plus className="h-5 w-5 text-white transform rotate-45" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-full  cursor-pointer">
                    <Camera className="h-12 w-12 text-gray-400 mb-4" />
                    <span className="text-gray-400 font-mono">Click to upload or drag and drop</span>
                    <span className="text-sm text-gray-500 font-mono mt-2">PNG, JPG, GIF up to 500 kb</span>
                    <input
                      name='nftImage'
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>

              
              <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                NFT Banner Image
              </label>
              <div className={`border-2 border-dashed border-gray-600 rounded-lg p-4 
                ${nftBanner.previewUrl ? 'bg-gray-700' : 'bg-gray-800'} 
                hover:border-green-400 transition-colors duration-200`}>
                {nftBanner.previewUrl ? (
                  <div className="relative">
                    <img 
                      src={nftBanner.previewUrl} 
                      alt="NFT Preview" 
                      className="w-full h-full object-contain rounded"
                    />
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-gray-800 p-1 rounded-full"
                    >
                      <Plus className="h-5 w-5 text-white transform rotate-45" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-full  cursor-pointer">
                    <Camera className="h-12 w-12 text-gray-400 mb-4" />
                    <span className="text-gray-400 font-mono">Click to upload or drag and drop</span>
                    <span className="text-sm text-gray-500 font-mono mt-2">PNG, JPG, GIF up to 10MB</span>
                    <input
                      name='nftBanner'
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>
            </div> */}
        {/* Form Fields */}
        <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  NFT Mint Address
                </label>
                <input
                  type="text"
                  name="nftMint"
                  value={formData.nftMint}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="xsd..ds3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Wallet Address
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 truncate bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter NFT name"
                />
              </div>
  

              {/* <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Collection
                </label>
                <select
                  name="collection"
                  value={formData.collection}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                >
                  <option value="">Select Collection</option>
                  {COLLECTION_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Tags Section */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  Tags
                </label>
                <div className="flex gap-2 flex-wrap mb-2">
                  {formData.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700 text-white px-2 py-1 rounded-md flex items-center gap-1 font-mono"
                    >
                      {tag}
                      <button 
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Plus className="h-4 w-4 transform rotate-45" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Add a tag"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className={` ${!wallet.publicKey?" opacity-60 cursor-not-allowed hover:bg-none ":"hover:bg-green-300  cursor-pointer"} w-full flex items-center justify-center px-4 py-3 bg-green-400 text-gray-900 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 font-mono`}
              disabled={!wallet.publicKey}
            >
              <Upload className="mr-2 h-5 w-5" />
              Create NFT
            </button>
           { !wallet.publicKey && <span className=' flex justify-center mt-1 font-cpmono-normal text-[13px] text-clip text-center  text-red-400 '>Please connect your wallet first</span>}
          </div>
        </form>
      </div>
    </div>
  );
};
 

export  type {FormDataType}