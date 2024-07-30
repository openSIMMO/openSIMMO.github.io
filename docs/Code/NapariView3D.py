#%%
import napari
viewer = napari.Viewer()
#%%
import tifffile as tif
import numpy as np
mSIM = tif.imread('zstack_SIM_results_PCO_60x.tif')
mBF = tif.imread('zstack_wf_results_PCO_60x.tif')
viewer.add_image(np.flip(np.transpose(mSIM[:,:,:mSIM.shape[2]//2], (0,2,1)),0), name='SIM')
viewer.add_image(np.flip(np.transpose(mBF[:,:mSIM.shape[1]//2,:mSIM.shape[2]//2], (0,2,1)),0), name='BF')



#%%
viewer.dims.ndisplay = 3
viewer.camera.angles=(0,0,-45)
viewer.camera.center=(0, 600, 1500)
viewer.camera.perspective = 45


# %%
viewer.layers["BF"].scale = [4, 1, 1]
viewer.layers["SIM"].scale = [4, 1, 1]
# %%
#viewer.screenshot("opensimmo3dmito.tif", size =(6400, 3200))

input()
