var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.JointSpring' )
  var i1831 = data
  i1830.spring = i1831[0]
  i1830.damper = i1831[1]
  i1830.targetPosition = i1831[2]
  return i1830
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.JointMotor' )
  var i1833 = data
  i1832.m_TargetVelocity = i1833[0]
  i1832.m_Force = i1833[1]
  i1832.m_FreeSpin = i1833[2]
  return i1832
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.JointLimits' )
  var i1835 = data
  i1834.m_Min = i1835[0]
  i1834.m_Max = i1835[1]
  i1834.m_Bounciness = i1835[2]
  i1834.m_BounceMinVelocity = i1835[3]
  i1834.m_ContactDistance = i1835[4]
  i1834.minBounce = i1835[5]
  i1834.maxBounce = i1835[6]
  return i1834
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.JointDrive' )
  var i1837 = data
  i1836.m_PositionSpring = i1837[0]
  i1836.m_PositionDamper = i1837[1]
  i1836.m_MaximumForce = i1837[2]
  i1836.m_UseAcceleration = i1837[3]
  return i1836
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1839 = data
  i1838.m_Spring = i1839[0]
  i1838.m_Damper = i1839[1]
  return i1838
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1841 = data
  i1840.m_Limit = i1841[0]
  i1840.m_Bounciness = i1841[1]
  i1840.m_ContactDistance = i1841[2]
  return i1840
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1843 = data
  i1842.m_ExtremumSlip = i1843[0]
  i1842.m_ExtremumValue = i1843[1]
  i1842.m_AsymptoteSlip = i1843[2]
  i1842.m_AsymptoteValue = i1843[3]
  i1842.m_Stiffness = i1843[4]
  return i1842
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1845 = data
  i1844.m_LowerAngle = i1845[0]
  i1844.m_UpperAngle = i1845[1]
  return i1844
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1847 = data
  i1846.m_MotorSpeed = i1847[0]
  i1846.m_MaximumMotorTorque = i1847[1]
  return i1846
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1849 = data
  i1848.m_DampingRatio = i1849[0]
  i1848.m_Frequency = i1849[1]
  i1848.m_Angle = i1849[2]
  return i1848
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1851 = data
  i1850.m_LowerTranslation = i1851[0]
  i1850.m_UpperTranslation = i1851[1]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.width = i1853[1]
  i1852.height = i1853[2]
  i1852.mipmapCount = i1853[3]
  i1852.anisoLevel = i1853[4]
  i1852.filterMode = i1853[5]
  i1852.hdr = !!i1853[6]
  i1852.format = i1853[7]
  i1852.wrapMode = i1853[8]
  i1852.alphaIsTransparency = !!i1853[9]
  i1852.alphaSource = i1853[10]
  i1852.graphicsFormat = i1853[11]
  i1852.sRGBTexture = !!i1853[12]
  i1852.desiredColorSpace = i1853[13]
  i1852.wrapU = i1853[14]
  i1852.wrapV = i1853[15]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.halfPrecision = !!i1855[1]
  i1854.useUInt32IndexFormat = !!i1855[2]
  i1854.vertexCount = i1855[3]
  i1854.aabb = i1855[4]
  var i1857 = i1855[5]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( !!i1857[i + 0] );
  }
  i1854.streams = i1856
  i1854.vertices = i1855[6]
  var i1859 = i1855[7]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1859[i + 0]) );
  }
  i1854.subMeshes = i1858
  var i1861 = i1855[8]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 16) {
    i1860.push( new pc.Mat4().setData(i1861[i + 0], i1861[i + 1], i1861[i + 2], i1861[i + 3],  i1861[i + 4], i1861[i + 5], i1861[i + 6], i1861[i + 7],  i1861[i + 8], i1861[i + 9], i1861[i + 10], i1861[i + 11],  i1861[i + 12], i1861[i + 13], i1861[i + 14], i1861[i + 15]) );
  }
  i1854.bindposes = i1860
  var i1863 = i1855[9]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1863[i + 0]) );
  }
  i1854.blendShapes = i1862
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1869 = data
  i1868.triangles = i1869[0]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1875 = data
  i1874.name = i1875[0]
  var i1877 = i1875[1]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1877[i + 0]) );
  }
  i1874.frames = i1876
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1878 = root || new pc.UnityMaterial()
  var i1879 = data
  i1878.name = i1879[0]
  request.r(i1879[1], i1879[2], 0, i1878, 'shader')
  i1878.renderQueue = i1879[3]
  i1878.enableInstancing = !!i1879[4]
  var i1881 = i1879[5]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1881[i + 0]) );
  }
  i1878.floatParameters = i1880
  var i1883 = i1879[6]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1883[i + 0]) );
  }
  i1878.colorParameters = i1882
  var i1885 = i1879[7]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1885[i + 0]) );
  }
  i1878.vectorParameters = i1884
  var i1887 = i1879[8]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1887[i + 0]) );
  }
  i1878.textureParameters = i1886
  var i1889 = i1879[9]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1889[i + 0]) );
  }
  i1878.materialFlags = i1888
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.value = i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1897 = data
  i1896.name = i1897[0]
  i1896.value = new pc.Color(i1897[1], i1897[2], i1897[3], i1897[4])
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1901 = data
  i1900.name = i1901[0]
  i1900.value = new pc.Vec4( i1901[1], i1901[2], i1901[3], i1901[4] )
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1905 = data
  i1904.name = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'value')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1909 = data
  i1908.name = i1909[0]
  i1908.enabled = !!i1909[1]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1911 = data
  i1910.position = new pc.Vec3( i1911[0], i1911[1], i1911[2] )
  i1910.scale = new pc.Vec3( i1911[3], i1911[4], i1911[5] )
  i1910.rotation = new pc.Quat(i1911[6], i1911[7], i1911[8], i1911[9])
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'sharedMesh')
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'additionalVertexStreams')
  i1914.enabled = !!i1915[2]
  request.r(i1915[3], i1915[4], 0, i1914, 'sharedMaterial')
  var i1917 = i1915[5]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 2, i1916, '')
  }
  i1914.sharedMaterials = i1916
  i1914.receiveShadows = !!i1915[6]
  i1914.shadowCastingMode = i1915[7]
  i1914.sortingLayerID = i1915[8]
  i1914.sortingOrder = i1915[9]
  i1914.lightmapIndex = i1915[10]
  i1914.lightmapSceneIndex = i1915[11]
  i1914.lightmapScaleOffset = new pc.Vec4( i1915[12], i1915[13], i1915[14], i1915[15] )
  i1914.lightProbeUsage = i1915[16]
  i1914.reflectionProbeUsage = i1915[17]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.tagId = i1921[1]
  i1920.enabled = !!i1921[2]
  i1920.isStatic = !!i1921[3]
  i1920.layer = i1921[4]
  return i1920
}

Deserializers["Tree"] = function (request, data, root) {
  var i1922 = root || request.c( 'Tree' )
  var i1923 = data
  i1922.flashSpeed = i1923[0]
  i1922.pauseBetweenFlashes = i1923[1]
  i1922.flashCount = i1923[2]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1925 = data
  i1924.enabled = !!i1925[0]
  request.r(i1925[1], i1925[2], 0, i1924, 'sharedMaterial')
  var i1927 = i1925[3]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 2) {
  request.r(i1927[i + 0], i1927[i + 1], 2, i1926, '')
  }
  i1924.sharedMaterials = i1926
  i1924.receiveShadows = !!i1925[4]
  i1924.shadowCastingMode = i1925[5]
  i1924.sortingLayerID = i1925[6]
  i1924.sortingOrder = i1925[7]
  i1924.lightmapIndex = i1925[8]
  i1924.lightmapSceneIndex = i1925[9]
  i1924.lightmapScaleOffset = new pc.Vec4( i1925[10], i1925[11], i1925[12], i1925[13] )
  i1924.lightProbeUsage = i1925[14]
  i1924.reflectionProbeUsage = i1925[15]
  request.r(i1925[16], i1925[17], 0, i1924, 'sharedMesh')
  var i1929 = i1925[18]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1924.bones = i1928
  i1924.updateWhenOffscreen = !!i1925[19]
  i1924.localBounds = i1925[20]
  request.r(i1925[21], i1925[22], 0, i1924, 'rootBone')
  var i1931 = i1925[23]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1931[i + 0]) );
  }
  i1924.blendShapesWeights = i1930
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1937 = data
  i1936.weight = i1937[0]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1939 = data
  i1938.center = new pc.Vec3( i1939[0], i1939[1], i1939[2] )
  i1938.size = new pc.Vec3( i1939[3], i1939[4], i1939[5] )
  i1938.enabled = !!i1939[6]
  i1938.isTrigger = !!i1939[7]
  request.r(i1939[8], i1939[9], 0, i1938, 'material')
  return i1938
}

Deserializers["Wall"] = function (request, data, root) {
  var i1940 = root || request.c( 'Wall' )
  var i1941 = data
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1943 = data
  i1942.name = i1943[0]
  i1942.atlasId = i1943[1]
  i1942.mipmapCount = i1943[2]
  i1942.hdr = !!i1943[3]
  i1942.size = i1943[4]
  i1942.anisoLevel = i1943[5]
  i1942.filterMode = i1943[6]
  var i1945 = i1943[7]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 4) {
    i1944.push( UnityEngine.Rect.MinMaxRect(i1945[i + 0], i1945[i + 1], i1945[i + 2], i1945[i + 3]) );
  }
  i1942.rects = i1944
  i1942.wrapU = i1943[8]
  i1942.wrapV = i1943[9]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1949 = data
  i1948.name = i1949[0]
  i1948.index = i1949[1]
  i1948.startup = !!i1949[2]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1951 = data
  i1950.pivot = new pc.Vec2( i1951[0], i1951[1] )
  i1950.anchorMin = new pc.Vec2( i1951[2], i1951[3] )
  i1950.anchorMax = new pc.Vec2( i1951[4], i1951[5] )
  i1950.sizeDelta = new pc.Vec2( i1951[6], i1951[7] )
  i1950.anchoredPosition3D = new pc.Vec3( i1951[8], i1951[9], i1951[10] )
  i1950.rotation = new pc.Quat(i1951[11], i1951[12], i1951[13], i1951[14])
  i1950.scale = new pc.Vec3( i1951[15], i1951[16], i1951[17] )
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.planeDistance = i1953[1]
  i1952.referencePixelsPerUnit = i1953[2]
  i1952.isFallbackOverlay = !!i1953[3]
  i1952.renderMode = i1953[4]
  i1952.renderOrder = i1953[5]
  i1952.sortingLayerName = i1953[6]
  i1952.sortingOrder = i1953[7]
  i1952.scaleFactor = i1953[8]
  request.r(i1953[9], i1953[10], 0, i1952, 'worldCamera')
  i1952.overrideSorting = !!i1953[11]
  i1952.pixelPerfect = !!i1953[12]
  i1952.targetDisplay = i1953[13]
  i1952.overridePixelPerfect = !!i1953[14]
  return i1952
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1955 = data
  i1954.m_UiScaleMode = i1955[0]
  i1954.m_ReferencePixelsPerUnit = i1955[1]
  i1954.m_ScaleFactor = i1955[2]
  i1954.m_ReferenceResolution = new pc.Vec2( i1955[3], i1955[4] )
  i1954.m_ScreenMatchMode = i1955[5]
  i1954.m_MatchWidthOrHeight = i1955[6]
  i1954.m_PhysicalUnit = i1955[7]
  i1954.m_FallbackScreenDPI = i1955[8]
  i1954.m_DefaultSpriteDPI = i1955[9]
  i1954.m_DynamicPixelsPerUnit = i1955[10]
  i1954.m_PresetInfoIsWorld = !!i1955[11]
  return i1954
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1957 = data
  i1956.m_IgnoreReversedGraphics = !!i1957[0]
  i1956.m_BlockingObjects = i1957[1]
  i1956.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1957[2] )
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'animatorController')
  request.r(i1959[2], i1959[3], 0, i1958, 'avatar')
  i1958.updateMode = i1959[4]
  i1958.hasTransformHierarchy = !!i1959[5]
  i1958.applyRootMotion = !!i1959[6]
  var i1961 = i1959[7]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 2, i1960, '')
  }
  i1958.humanBones = i1960
  i1958.enabled = !!i1959[8]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1963 = data
  i1962.cullTransparentMesh = !!i1963[0]
  return i1962
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.Image' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'm_Sprite')
  i1964.m_Type = i1965[2]
  i1964.m_PreserveAspect = !!i1965[3]
  i1964.m_FillCenter = !!i1965[4]
  i1964.m_FillMethod = i1965[5]
  i1964.m_FillAmount = i1965[6]
  i1964.m_FillClockwise = !!i1965[7]
  i1964.m_FillOrigin = i1965[8]
  i1964.m_UseSpriteMesh = !!i1965[9]
  i1964.m_PixelsPerUnitMultiplier = i1965[10]
  request.r(i1965[11], i1965[12], 0, i1964, 'm_Material')
  i1964.m_Maskable = !!i1965[13]
  i1964.m_Color = new pc.Color(i1965[14], i1965[15], i1965[16], i1965[17])
  i1964.m_RaycastTarget = !!i1965[18]
  i1964.m_RaycastPadding = new pc.Vec4( i1965[19], i1965[20], i1965[21], i1965[22] )
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.aspect = i1967[1]
  i1966.orthographic = !!i1967[2]
  i1966.orthographicSize = i1967[3]
  i1966.backgroundColor = new pc.Color(i1967[4], i1967[5], i1967[6], i1967[7])
  i1966.nearClipPlane = i1967[8]
  i1966.farClipPlane = i1967[9]
  i1966.fieldOfView = i1967[10]
  i1966.depth = i1967[11]
  i1966.clearFlags = i1967[12]
  i1966.cullingMask = i1967[13]
  i1966.rect = i1967[14]
  request.r(i1967[15], i1967[16], 0, i1966, 'targetTexture')
  i1966.usePhysicalProperties = !!i1967[17]
  i1966.focalLength = i1967[18]
  i1966.sensorSize = new pc.Vec2( i1967[19], i1967[20] )
  i1966.lensShift = new pc.Vec2( i1967[21], i1967[22] )
  i1966.gateFit = i1967[23]
  i1966.commandBufferCount = i1967[24]
  i1966.cameraType = i1967[25]
  return i1966
}

Deserializers["AdaptiveCameraPosition"] = function (request, data, root) {
  var i1968 = root || request.c( 'AdaptiveCameraPosition' )
  var i1969 = data
  i1968.portraitSettings = request.d('AdaptiveCameraPosition+CameraSettings', i1969[0], i1968.portraitSettings)
  i1968.landscapeSettings = request.d('AdaptiveCameraPosition+CameraSettings', i1969[1], i1968.landscapeSettings)
  i1968.transitionSpeed = i1969[2]
  i1968.aspectRatioThreshold = i1969[3]
  i1968.debugMode = !!i1969[4]
  return i1968
}

Deserializers["AdaptiveCameraPosition+CameraSettings"] = function (request, data, root) {
  var i1970 = root || request.c( 'AdaptiveCameraPosition+CameraSettings' )
  var i1971 = data
  i1970.position = new pc.Vec3( i1971[0], i1971[1], i1971[2] )
  i1970.rotation = new pc.Vec3( i1971[3], i1971[4], i1971[5] )
  i1970.orthographicSize = i1971[6]
  i1970.fieldOfView = i1971[7]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1973 = data
  i1972.enabled = !!i1973[0]
  i1972.type = i1973[1]
  i1972.color = new pc.Color(i1973[2], i1973[3], i1973[4], i1973[5])
  i1972.cullingMask = i1973[6]
  i1972.intensity = i1973[7]
  i1972.range = i1973[8]
  i1972.spotAngle = i1973[9]
  i1972.shadows = i1973[10]
  i1972.shadowNormalBias = i1973[11]
  i1972.shadowBias = i1973[12]
  i1972.shadowStrength = i1973[13]
  i1972.shadowResolution = i1973[14]
  i1972.lightmapBakeType = i1973[15]
  i1972.renderMode = i1973[16]
  request.r(i1973[17], i1973[18], 0, i1972, 'cookie')
  i1972.cookieSize = i1973[19]
  return i1972
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i1974 = root || request.c( 'Conveyor' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'canvasAnimator')
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1977 = data
  i1976.center = new pc.Vec3( i1977[0], i1977[1], i1977[2] )
  i1976.radius = i1977[3]
  i1976.height = i1977[4]
  i1976.direction = i1977[5]
  i1976.enabled = !!i1977[6]
  i1976.isTrigger = !!i1977[7]
  request.r(i1977[8], i1977[9], 0, i1976, 'material')
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1979 = data
  i1978.mass = i1979[0]
  i1978.drag = i1979[1]
  i1978.angularDrag = i1979[2]
  i1978.useGravity = !!i1979[3]
  i1978.isKinematic = !!i1979[4]
  i1978.constraints = i1979[5]
  i1978.maxAngularVelocity = i1979[6]
  i1978.collisionDetectionMode = i1979[7]
  i1978.interpolation = i1979[8]
  return i1978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'm_FirstSelected')
  i1980.m_sendNavigationEvents = !!i1981[2]
  i1980.m_DragThreshold = i1981[3]
  return i1980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1983 = data
  i1982.m_HorizontalAxis = i1983[0]
  i1982.m_VerticalAxis = i1983[1]
  i1982.m_SubmitButton = i1983[2]
  i1982.m_CancelButton = i1983[3]
  i1982.m_InputActionsPerSecond = i1983[4]
  i1982.m_RepeatDelay = i1983[5]
  i1982.m_ForceModuleActive = !!i1983[6]
  i1982.m_SendPointerHoverToParent = !!i1983[7]
  return i1982
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i1984 = root || request.c( 'BuildManager' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, '_buildButton1')
  request.r(i1985[2], i1985[3], 0, i1984, '_buildButton2')
  request.r(i1985[4], i1985[5], 0, i1984, '_buildButton3')
  request.r(i1985[6], i1985[7], 0, i1984, '_buildButtonObject1')
  request.r(i1985[8], i1985[9], 0, i1984, '_buildButtonObject2')
  request.r(i1985[10], i1985[11], 0, i1984, '_build1')
  request.r(i1985[12], i1985[13], 0, i1984, '_build2')
  request.r(i1985[14], i1985[15], 0, i1984, '_build3')
  request.r(i1985[16], i1985[17], 0, i1984, '_moneyController')
  return i1984
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i1986 = root || request.c( 'CharactersMover' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1986._normalRoutePoints = i1988
  var i1991 = i1987[1]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 2, i1990, '')
  }
  i1986._unloadPoints = i1990
  request.r(i1987[2], i1987[3], 0, i1986, '_defaultUnloadPoint')
  i1986._checkTruckAvailabilityInterval = i1987[4]
  return i1986
}

Deserializers["Forklift"] = function (request, data, root) {
  var i1996 = root || request.c( 'Forklift' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1996._cargo = i1998
  return i1996
}

Deserializers["Garage"] = function (request, data, root) {
  var i2002 = root || request.c( 'Garage' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'chopper')
  return i2002
}

Deserializers["ChopperManager"] = function (request, data, root) {
  var i2004 = root || request.c( 'ChopperManager' )
  var i2005 = data
  var i2007 = i2005[0]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('Chopper')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i2004._choppers = i2006
  return i2004
}

Deserializers["Chopper"] = function (request, data, root) {
  var i2010 = root || request.c( 'Chopper' )
  var i2011 = data
  var i2013 = i2011[0]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 1, i2012, '')
  }
  i2010._cargo = i2012
  return i2010
}

Deserializers["ButtonLight"] = function (request, data, root) {
  var i2014 = root || request.c( 'ButtonLight' )
  var i2015 = data
  i2014.flashSpeed = i2015[0]
  i2014.pauseBetweenFlashes = i2015[1]
  i2014.flashCount = i2015[2]
  return i2014
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.UI.Button' )
  var i2017 = data
  i2016.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2017[0], i2016.m_OnClick)
  i2016.m_Navigation = request.d('UnityEngine.UI.Navigation', i2017[1], i2016.m_Navigation)
  i2016.m_Transition = i2017[2]
  i2016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2017[3], i2016.m_Colors)
  i2016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2017[4], i2016.m_SpriteState)
  i2016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2017[5], i2016.m_AnimationTriggers)
  i2016.m_Interactable = !!i2017[6]
  request.r(i2017[7], i2017[8], 0, i2016, 'm_TargetGraphic')
  return i2016
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2019 = data
  i2018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2019[0], i2018.m_PersistentCalls)
  return i2018
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('UnityEngine.Events.PersistentCall', i2023[i + 0]));
  }
  i2020.m_Calls = i2022
  return i2020
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'm_Target')
  i2026.m_TargetAssemblyTypeName = i2027[2]
  i2026.m_MethodName = i2027[3]
  i2026.m_Mode = i2027[4]
  i2026.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2027[5], i2026.m_Arguments)
  i2026.m_CallState = i2027[6]
  return i2026
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'm_ObjectArgument')
  i2028.m_ObjectArgumentAssemblyTypeName = i2029[2]
  i2028.m_IntArgument = i2029[3]
  i2028.m_FloatArgument = i2029[4]
  i2028.m_StringArgument = i2029[5]
  i2028.m_BoolArgument = !!i2029[6]
  return i2028
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2031 = data
  i2030.m_Mode = i2031[0]
  i2030.m_WrapAround = !!i2031[1]
  request.r(i2031[2], i2031[3], 0, i2030, 'm_SelectOnUp')
  request.r(i2031[4], i2031[5], 0, i2030, 'm_SelectOnDown')
  request.r(i2031[6], i2031[7], 0, i2030, 'm_SelectOnLeft')
  request.r(i2031[8], i2031[9], 0, i2030, 'm_SelectOnRight')
  return i2030
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2033 = data
  i2032.m_NormalColor = new pc.Color(i2033[0], i2033[1], i2033[2], i2033[3])
  i2032.m_HighlightedColor = new pc.Color(i2033[4], i2033[5], i2033[6], i2033[7])
  i2032.m_PressedColor = new pc.Color(i2033[8], i2033[9], i2033[10], i2033[11])
  i2032.m_SelectedColor = new pc.Color(i2033[12], i2033[13], i2033[14], i2033[15])
  i2032.m_DisabledColor = new pc.Color(i2033[16], i2033[17], i2033[18], i2033[19])
  i2032.m_ColorMultiplier = i2033[20]
  i2032.m_FadeDuration = i2033[21]
  return i2032
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'm_HighlightedSprite')
  request.r(i2035[2], i2035[3], 0, i2034, 'm_PressedSprite')
  request.r(i2035[4], i2035[5], 0, i2034, 'm_SelectedSprite')
  request.r(i2035[6], i2035[7], 0, i2034, 'm_DisabledSprite')
  return i2034
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2037 = data
  i2036.m_NormalTrigger = i2037[0]
  i2036.m_HighlightedTrigger = i2037[1]
  i2036.m_PressedTrigger = i2037[2]
  i2036.m_SelectedTrigger = i2037[3]
  i2036.m_DisabledTrigger = i2037[4]
  return i2036
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2039 = data
  i2038.m_hasFontAssetChanged = !!i2039[0]
  request.r(i2039[1], i2039[2], 0, i2038, 'm_baseMaterial')
  i2038.m_maskOffset = new pc.Vec4( i2039[3], i2039[4], i2039[5], i2039[6] )
  i2038.m_text = i2039[7]
  i2038.m_isRightToLeft = !!i2039[8]
  request.r(i2039[9], i2039[10], 0, i2038, 'm_fontAsset')
  request.r(i2039[11], i2039[12], 0, i2038, 'm_sharedMaterial')
  var i2041 = i2039[13]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 2, i2040, '')
  }
  i2038.m_fontSharedMaterials = i2040
  request.r(i2039[14], i2039[15], 0, i2038, 'm_fontMaterial')
  var i2043 = i2039[16]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2038.m_fontMaterials = i2042
  i2038.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2039[17], i2039[18], i2039[19], i2039[20])
  i2038.m_fontColor = new pc.Color(i2039[21], i2039[22], i2039[23], i2039[24])
  i2038.m_enableVertexGradient = !!i2039[25]
  i2038.m_colorMode = i2039[26]
  i2038.m_fontColorGradient = request.d('TMPro.VertexGradient', i2039[27], i2038.m_fontColorGradient)
  request.r(i2039[28], i2039[29], 0, i2038, 'm_fontColorGradientPreset')
  request.r(i2039[30], i2039[31], 0, i2038, 'm_spriteAsset')
  i2038.m_tintAllSprites = !!i2039[32]
  request.r(i2039[33], i2039[34], 0, i2038, 'm_StyleSheet')
  i2038.m_TextStyleHashCode = i2039[35]
  i2038.m_overrideHtmlColors = !!i2039[36]
  i2038.m_faceColor = UnityEngine.Color32.ConstructColor(i2039[37], i2039[38], i2039[39], i2039[40])
  i2038.m_fontSize = i2039[41]
  i2038.m_fontSizeBase = i2039[42]
  i2038.m_fontWeight = i2039[43]
  i2038.m_enableAutoSizing = !!i2039[44]
  i2038.m_fontSizeMin = i2039[45]
  i2038.m_fontSizeMax = i2039[46]
  i2038.m_fontStyle = i2039[47]
  i2038.m_HorizontalAlignment = i2039[48]
  i2038.m_VerticalAlignment = i2039[49]
  i2038.m_textAlignment = i2039[50]
  i2038.m_characterSpacing = i2039[51]
  i2038.m_wordSpacing = i2039[52]
  i2038.m_lineSpacing = i2039[53]
  i2038.m_lineSpacingMax = i2039[54]
  i2038.m_paragraphSpacing = i2039[55]
  i2038.m_charWidthMaxAdj = i2039[56]
  i2038.m_enableWordWrapping = !!i2039[57]
  i2038.m_wordWrappingRatios = i2039[58]
  i2038.m_overflowMode = i2039[59]
  request.r(i2039[60], i2039[61], 0, i2038, 'm_linkedTextComponent')
  request.r(i2039[62], i2039[63], 0, i2038, 'parentLinkedComponent')
  i2038.m_enableKerning = !!i2039[64]
  i2038.m_enableExtraPadding = !!i2039[65]
  i2038.checkPaddingRequired = !!i2039[66]
  i2038.m_isRichText = !!i2039[67]
  i2038.m_parseCtrlCharacters = !!i2039[68]
  i2038.m_isOrthographic = !!i2039[69]
  i2038.m_isCullingEnabled = !!i2039[70]
  i2038.m_horizontalMapping = i2039[71]
  i2038.m_verticalMapping = i2039[72]
  i2038.m_uvLineOffset = i2039[73]
  i2038.m_geometrySortingOrder = i2039[74]
  i2038.m_IsTextObjectScaleStatic = !!i2039[75]
  i2038.m_VertexBufferAutoSizeReduction = !!i2039[76]
  i2038.m_useMaxVisibleDescender = !!i2039[77]
  i2038.m_pageToDisplay = i2039[78]
  i2038.m_margin = new pc.Vec4( i2039[79], i2039[80], i2039[81], i2039[82] )
  i2038.m_isUsingLegacyAnimationComponent = !!i2039[83]
  i2038.m_isVolumetricText = !!i2039[84]
  request.r(i2039[85], i2039[86], 0, i2038, 'm_Material')
  i2038.m_Maskable = !!i2039[87]
  i2038.m_Color = new pc.Color(i2039[88], i2039[89], i2039[90], i2039[91])
  i2038.m_RaycastTarget = !!i2039[92]
  i2038.m_RaycastPadding = new pc.Vec4( i2039[93], i2039[94], i2039[95], i2039[96] )
  return i2038
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2044 = root || request.c( 'TMPro.VertexGradient' )
  var i2045 = data
  i2044.topLeft = new pc.Color(i2045[0], i2045[1], i2045[2], i2045[3])
  i2044.topRight = new pc.Color(i2045[4], i2045[5], i2045[6], i2045[7])
  i2044.bottomLeft = new pc.Color(i2045[8], i2045[9], i2045[10], i2045[11])
  i2044.bottomRight = new pc.Color(i2045[12], i2045[13], i2045[14], i2045[15])
  return i2044
}

Deserializers["Build"] = function (request, data, root) {
  var i2046 = root || request.c( 'Build' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'building')
  return i2046
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnloadPoint' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, '_targetTruck')
  i2048._allowForkliftToLoadHalfFullTrucks = !!i2049[2]
  i2048.delay = i2049[3]
  i2048.moveDuration = i2049[4]
  return i2048
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i2050 = root || request.c( 'LoadPoint' )
  var i2051 = data
  i2050.delay = i2051[0]
  i2050.moveDuration = i2051[1]
  return i2050
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i2052 = root || request.c( 'SimplePoint' )
  var i2053 = data
  i2052.delay = i2053[0]
  i2052.moveDuration = i2053[1]
  return i2052
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i2054 = root || request.c( 'MoneyController' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, '_moneyBalance')
  request.r(i2055[2], i2055[3], 0, i2054, '_moneyFlyAnimation')
  return i2054
}

Deserializers["MoneyFlyAnimation"] = function (request, data, root) {
  var i2056 = root || request.c( 'MoneyFlyAnimation' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'worldStartPoint')
  request.r(i2057[2], i2057[3], 0, i2056, 'moneyPrefab3D')
  i2056.poolSize = i2057[4]
  i2056.minDuration = i2057[5]
  i2056.maxDuration = i2057[6]
  i2056.spread = i2057[7]
  request.r(i2057[8], i2057[9], 0, i2056, 'uiTargetPoint')
  return i2056
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i2058 = root || request.c( 'MoneyBalance' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, '_text')
  return i2058
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i2060 = root || request.c( 'ClickCta' )
  var i2061 = data
  return i2060
}

Deserializers["TruckManager"] = function (request, data, root) {
  var i2062 = root || request.c( 'TruckManager' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('Truck')))
  for(var i = 0; i < i2065.length; i += 2) {
  request.r(i2065[i + 0], i2065[i + 1], 1, i2064, '')
  }
  i2062._trucks = i2064
  request.r(i2063[1], i2063[2], 0, i2062, '_unloadPoint')
  i2062._sendAllTrucksWhenAllFull = !!i2063[3]
  return i2062
}

Deserializers["TruckUnloadPoint"] = function (request, data, root) {
  var i2068 = root || request.c( 'TruckUnloadPoint' )
  var i2069 = data
  i2068._unloadDuration = i2069[0]
  request.r(i2069[1], i2069[2], 0, i2068, '_truckStopPosition')
  i2068.delay = i2069[3]
  i2068.moveDuration = i2069[4]
  return i2068
}

Deserializers["Truck"] = function (request, data, root) {
  var i2070 = root || request.c( 'Truck' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'progressBarImage')
  var i2073 = i2071[2]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 1, i2072, '')
  }
  i2070._cargoSlots = i2072
  i2070._maxCapacity = i2071[3]
  i2070._logLoadSoundName = i2071[4]
  i2070._truckFullSoundName = i2071[5]
  i2070._playCargoSounds = !!i2071[6]
  return i2070
}

Deserializers["TruckMover"] = function (request, data, root) {
  var i2074 = root || request.c( 'TruckMover' )
  var i2075 = data
  i2074._moveEase = i2075[0]
  request.r(i2075[1], i2075[2], 0, i2074, '_startPosition')
  request.r(i2075[3], i2075[4], 0, i2074, '_engineSound')
  return i2074
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2076 = root || request.c( 'GameManager' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'tutorialObject')
  request.r(i2077[2], i2077[3], 0, i2076, 'tutorialAnimator')
  i2076.idleTimeForTutorial = i2077[4]
  var i2079 = i2077[5]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('ButtonLight')))
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 1, i2078, '')
  }
  i2076.buildButtonLights = i2078
  request.r(i2077[6], i2077[7], 0, i2076, 'upgradeButton')
  request.r(i2077[8], i2077[9], 0, i2076, 'upgradeButtonGameObject')
  request.r(i2077[10], i2077[11], 0, i2076, 'secondRequiredButton')
  request.r(i2077[12], i2077[13], 0, i2076, 'packShotObject')
  request.r(i2077[14], i2077[15], 0, i2076, 'moneyController')
  request.r(i2077[16], i2077[17], 0, i2076, 'buildManager')
  return i2076
}

Deserializers["SimpleAudioManager"] = function (request, data, root) {
  var i2082 = root || request.c( 'SimpleAudioManager' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'progressBarSound')
  request.r(i2083[2], i2083[3], 0, i2082, 'conveyorAnimationSound')
  request.r(i2083[4], i2083[5], 0, i2082, 'logLoadSound')
  request.r(i2083[6], i2083[7], 0, i2082, 'buttonClickSound')
  request.r(i2083[8], i2083[9], 0, i2082, 'houseAppearSound')
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2085 = data
  i2084.ambientIntensity = i2085[0]
  i2084.reflectionIntensity = i2085[1]
  i2084.ambientMode = i2085[2]
  i2084.ambientLight = new pc.Color(i2085[3], i2085[4], i2085[5], i2085[6])
  i2084.ambientSkyColor = new pc.Color(i2085[7], i2085[8], i2085[9], i2085[10])
  i2084.ambientGroundColor = new pc.Color(i2085[11], i2085[12], i2085[13], i2085[14])
  i2084.ambientEquatorColor = new pc.Color(i2085[15], i2085[16], i2085[17], i2085[18])
  i2084.fogColor = new pc.Color(i2085[19], i2085[20], i2085[21], i2085[22])
  i2084.fogEndDistance = i2085[23]
  i2084.fogStartDistance = i2085[24]
  i2084.fogDensity = i2085[25]
  i2084.fog = !!i2085[26]
  request.r(i2085[27], i2085[28], 0, i2084, 'skybox')
  i2084.fogMode = i2085[29]
  var i2087 = i2085[30]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2087[i + 0]) );
  }
  i2084.lightmaps = i2086
  i2084.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2085[31], i2084.lightProbes)
  i2084.lightmapsMode = i2085[32]
  i2084.mixedBakeMode = i2085[33]
  i2084.environmentLightingMode = i2085[34]
  i2084.ambientProbe = new pc.SphericalHarmonicsL2(i2085[35])
  i2084.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2085[36])
  i2084.useReferenceAmbientProbe = !!i2085[37]
  request.r(i2085[38], i2085[39], 0, i2084, 'customReflection')
  request.r(i2085[40], i2085[41], 0, i2084, 'defaultReflection')
  i2084.defaultReflectionMode = i2085[42]
  i2084.defaultReflectionResolution = i2085[43]
  i2084.sunLightObjectId = i2085[44]
  i2084.pixelLightCount = i2085[45]
  i2084.defaultReflectionHDR = !!i2085[46]
  i2084.hasLightDataAsset = !!i2085[47]
  i2084.hasManualGenerate = !!i2085[48]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'lightmapColor')
  request.r(i2091[2], i2091[3], 0, i2090, 'lightmapDirection')
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2092 = root || new UnityEngine.LightProbes()
  var i2093 = data
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2103[i + 0]));
  }
  i2100.ShaderCompilationErrors = i2102
  i2100.name = i2101[1]
  i2100.guid = i2101[2]
  var i2105 = i2101[3]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2100.shaderDefinedKeywords = i2104
  var i2107 = i2101[4]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2107[i + 0]) );
  }
  i2100.passes = i2106
  var i2109 = i2101[5]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2109[i + 0]) );
  }
  i2100.usePasses = i2108
  var i2111 = i2101[6]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2111[i + 0]) );
  }
  i2100.defaultParameterValues = i2110
  request.r(i2101[7], i2101[8], 0, i2100, 'unityFallbackShader')
  i2100.readDepth = !!i2101[9]
  i2100.isCreatedByShaderGraph = !!i2101[10]
  i2100.compiled = !!i2101[11]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2115 = data
  i2114.shaderName = i2115[0]
  i2114.errorMessage = i2115[1]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2120 = root || new pc.UnityShaderPass()
  var i2121 = data
  i2120.id = i2121[0]
  i2120.subShaderIndex = i2121[1]
  i2120.name = i2121[2]
  i2120.passType = i2121[3]
  i2120.grabPassTextureName = i2121[4]
  i2120.usePass = !!i2121[5]
  i2120.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[6], i2120.zTest)
  i2120.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[7], i2120.zWrite)
  i2120.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[8], i2120.culling)
  i2120.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2121[9], i2120.blending)
  i2120.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2121[10], i2120.alphaBlending)
  i2120.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[11], i2120.colorWriteMask)
  i2120.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[12], i2120.offsetUnits)
  i2120.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[13], i2120.offsetFactor)
  i2120.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[14], i2120.stencilRef)
  i2120.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[15], i2120.stencilReadMask)
  i2120.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2121[16], i2120.stencilWriteMask)
  i2120.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2121[17], i2120.stencilOp)
  i2120.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2121[18], i2120.stencilOpFront)
  i2120.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2121[19], i2120.stencilOpBack)
  var i2123 = i2121[20]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2123[i + 0]) );
  }
  i2120.tags = i2122
  var i2125 = i2121[21]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2120.passDefinedKeywords = i2124
  var i2127 = i2121[22]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2127[i + 0]) );
  }
  i2120.passDefinedKeywordGroups = i2126
  var i2129 = i2121[23]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2129[i + 0]) );
  }
  i2120.variants = i2128
  var i2131 = i2121[24]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2131[i + 0]) );
  }
  i2120.excludedVariants = i2130
  i2120.hasDepthReader = !!i2121[25]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2133 = data
  i2132.val = i2133[0]
  i2132.name = i2133[1]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2135 = data
  i2134.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2135[0], i2134.src)
  i2134.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2135[1], i2134.dst)
  i2134.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2135[2], i2134.op)
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2137 = data
  i2136.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[0], i2136.pass)
  i2136.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[1], i2136.fail)
  i2136.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[2], i2136.zFail)
  i2136.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[3], i2136.comp)
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.value = i2141[1]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2145 = data
  var i2147 = i2145[0]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( i2147[i + 0] );
  }
  i2144.keywords = i2146
  i2144.hasDiscard = !!i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2151 = data
  i2150.passId = i2151[0]
  i2150.subShaderIndex = i2151[1]
  var i2153 = i2151[2]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2150.keywords = i2152
  i2150.vertexProgram = i2151[3]
  i2150.fragmentProgram = i2151[4]
  i2150.exportedForWebGl2 = !!i2151[5]
  i2150.readDepth = !!i2151[6]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'shader')
  i2156.pass = i2157[2]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.type = i2161[1]
  i2160.value = new pc.Vec4( i2161[2], i2161[3], i2161[4], i2161[5] )
  i2160.textureValue = i2161[6]
  i2160.shaderPropertyFlag = i2161[7]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2163 = data
  i2162.name = i2163[0]
  request.r(i2163[1], i2163[2], 0, i2162, 'texture')
  i2162.aabb = i2163[3]
  i2162.vertices = i2163[4]
  i2162.triangles = i2163[5]
  i2162.textureRect = UnityEngine.Rect.MinMaxRect(i2163[6], i2163[7], i2163[8], i2163[9])
  i2162.packedRect = UnityEngine.Rect.MinMaxRect(i2163[10], i2163[11], i2163[12], i2163[13])
  i2162.border = new pc.Vec4( i2163[14], i2163[15], i2163[16], i2163[17] )
  i2162.transparency = i2163[18]
  i2162.bounds = i2163[19]
  i2162.pixelsPerUnit = i2163[20]
  i2162.textureWidth = i2163[21]
  i2162.textureHeight = i2163[22]
  i2162.nativeSize = new pc.Vec2( i2163[23], i2163[24] )
  i2162.pivot = new pc.Vec2( i2163[25], i2163[26] )
  i2162.textureRectOffset = new pc.Vec2( i2163[27], i2163[28] )
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2165 = data
  i2164.name = i2165[0]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.wrapMode = i2167[1]
  i2166.isLooping = !!i2167[2]
  i2166.length = i2167[3]
  var i2169 = i2167[4]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2169[i + 0]) );
  }
  i2166.curves = i2168
  var i2171 = i2167[5]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2171[i + 0]) );
  }
  i2166.events = i2170
  i2166.halfPrecision = !!i2167[6]
  i2166._frameRate = i2167[7]
  i2166.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2167[8], i2166.localBounds)
  i2166.hasMuscleCurves = !!i2167[9]
  var i2173 = i2167[10]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( i2173[i + 0] );
  }
  i2166.clipMuscleConstant = i2172
  i2166.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2167[11], i2166.clipBindingConstant)
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2177 = data
  i2176.path = i2177[0]
  i2176.hash = i2177[1]
  i2176.componentType = i2177[2]
  i2176.property = i2177[3]
  i2176.keys = i2177[4]
  var i2179 = i2177[5]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2179[i + 0]) );
  }
  i2176.objectReferenceKeys = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2183 = data
  i2182.time = i2183[0]
  request.r(i2183[1], i2183[2], 0, i2182, 'value')
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2187 = data
  i2186.functionName = i2187[0]
  i2186.floatParameter = i2187[1]
  i2186.intParameter = i2187[2]
  i2186.stringParameter = i2187[3]
  request.r(i2187[4], i2187[5], 0, i2186, 'objectReferenceParameter')
  i2186.time = i2187[6]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2189 = data
  i2188.center = new pc.Vec3( i2189[0], i2189[1], i2189[2] )
  i2188.extends = new pc.Vec3( i2189[3], i2189[4], i2189[5] )
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2193 = data
  var i2195 = i2193[0]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( i2195[i + 0] );
  }
  i2192.genericBindings = i2194
  var i2197 = i2193[1]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( i2197[i + 0] );
  }
  i2192.pptrCurveMapping = i2196
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.ascent = i2199[1]
  i2198.originalLineHeight = i2199[2]
  i2198.fontSize = i2199[3]
  var i2201 = i2199[4]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2201[i + 0]) );
  }
  i2198.characterInfo = i2200
  request.r(i2199[5], i2199[6], 0, i2198, 'texture')
  i2198.originalFontSize = i2199[7]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2205 = data
  i2204.index = i2205[0]
  i2204.advance = i2205[1]
  i2204.bearing = i2205[2]
  i2204.glyphWidth = i2205[3]
  i2204.glyphHeight = i2205[4]
  i2204.minX = i2205[5]
  i2204.maxX = i2205[6]
  i2204.minY = i2205[7]
  i2204.maxY = i2205[8]
  i2204.uvBottomLeftX = i2205[9]
  i2204.uvBottomLeftY = i2205[10]
  i2204.uvBottomRightX = i2205[11]
  i2204.uvBottomRightY = i2205[12]
  i2204.uvTopLeftX = i2205[13]
  i2204.uvTopLeftY = i2205[14]
  i2204.uvTopRightX = i2205[15]
  i2204.uvTopRightY = i2205[16]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2207 = data
  i2206.name = i2207[0]
  var i2209 = i2207[1]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2209[i + 0]) );
  }
  i2206.layers = i2208
  var i2211 = i2207[2]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2211[i + 0]) );
  }
  i2206.parameters = i2210
  i2206.animationClips = i2207[3]
  i2206.avatarUnsupported = i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.defaultWeight = i2215[1]
  i2214.blendingMode = i2215[2]
  i2214.avatarMask = i2215[3]
  i2214.syncedLayerIndex = i2215[4]
  i2214.syncedLayerAffectsTiming = !!i2215[5]
  i2214.syncedLayers = i2215[6]
  i2214.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2215[7], i2214.stateMachine)
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2217 = data
  i2216.id = i2217[0]
  i2216.name = i2217[1]
  i2216.path = i2217[2]
  var i2219 = i2217[3]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2219[i + 0]) );
  }
  i2216.states = i2218
  var i2221 = i2217[4]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2221[i + 0]) );
  }
  i2216.machines = i2220
  var i2223 = i2217[5]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2223[i + 0]) );
  }
  i2216.entryStateTransitions = i2222
  var i2225 = i2217[6]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2225[i + 0]) );
  }
  i2216.exitStateTransitions = i2224
  var i2227 = i2217[7]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2227[i + 0]) );
  }
  i2216.anyStateTransitions = i2226
  i2216.defaultStateId = i2217[8]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2231 = data
  i2230.id = i2231[0]
  i2230.name = i2231[1]
  i2230.cycleOffset = i2231[2]
  i2230.cycleOffsetParameter = i2231[3]
  i2230.cycleOffsetParameterActive = !!i2231[4]
  i2230.mirror = !!i2231[5]
  i2230.mirrorParameter = i2231[6]
  i2230.mirrorParameterActive = !!i2231[7]
  i2230.motionId = i2231[8]
  i2230.nameHash = i2231[9]
  i2230.fullPathHash = i2231[10]
  i2230.speed = i2231[11]
  i2230.speedParameter = i2231[12]
  i2230.speedParameterActive = !!i2231[13]
  i2230.tag = i2231[14]
  i2230.tagHash = i2231[15]
  i2230.writeDefaultValues = !!i2231[16]
  var i2233 = i2231[17]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.behaviours = i2232
  var i2235 = i2231[18]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2235[i + 0]) );
  }
  i2230.transitions = i2234
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2241 = data
  i2240.fullPath = i2241[0]
  i2240.canTransitionToSelf = !!i2241[1]
  i2240.duration = i2241[2]
  i2240.exitTime = i2241[3]
  i2240.hasExitTime = !!i2241[4]
  i2240.hasFixedDuration = !!i2241[5]
  i2240.interruptionSource = i2241[6]
  i2240.offset = i2241[7]
  i2240.orderedInterruption = !!i2241[8]
  i2240.destinationStateId = i2241[9]
  i2240.isExit = !!i2241[10]
  i2240.mute = !!i2241[11]
  i2240.solo = !!i2241[12]
  var i2243 = i2241[13]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2243[i + 0]) );
  }
  i2240.conditions = i2242
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2249 = data
  i2248.destinationStateId = i2249[0]
  i2248.isExit = !!i2249[1]
  i2248.mute = !!i2249[2]
  i2248.solo = !!i2249[3]
  var i2251 = i2249[4]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2251[i + 0]) );
  }
  i2248.conditions = i2250
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2255 = data
  i2254.defaultBool = !!i2255[0]
  i2254.defaultFloat = i2255[1]
  i2254.defaultInt = i2255[2]
  i2254.name = i2255[3]
  i2254.nameHash = i2255[4]
  i2254.type = i2255[5]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2259 = data
  i2258.mode = i2259[0]
  i2258.parameter = i2259[1]
  i2258.threshold = i2259[2]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.bytes64 = i2261[1]
  i2260.data = i2261[2]
  return i2260
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2262 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2263 = data
  i2262.hashCode = i2263[0]
  request.r(i2263[1], i2263[2], 0, i2262, 'material')
  i2262.materialHashCode = i2263[3]
  request.r(i2263[4], i2263[5], 0, i2262, 'atlas')
  i2262.normalStyle = i2263[6]
  i2262.normalSpacingOffset = i2263[7]
  i2262.boldStyle = i2263[8]
  i2262.boldSpacing = i2263[9]
  i2262.italicStyle = i2263[10]
  i2262.tabSize = i2263[11]
  i2262.m_Version = i2263[12]
  i2262.m_SourceFontFileGUID = i2263[13]
  request.r(i2263[14], i2263[15], 0, i2262, 'm_SourceFontFile_EditorRef')
  request.r(i2263[16], i2263[17], 0, i2262, 'm_SourceFontFile')
  i2262.m_AtlasPopulationMode = i2263[18]
  i2262.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2263[19], i2262.m_FaceInfo)
  var i2265 = i2263[20]
  var i2264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.add(request.d('UnityEngine.TextCore.Glyph', i2265[i + 0]));
  }
  i2262.m_GlyphTable = i2264
  var i2267 = i2263[21]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.add(request.d('TMPro.TMP_Character', i2267[i + 0]));
  }
  i2262.m_CharacterTable = i2266
  var i2269 = i2263[22]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 2, i2268, '')
  }
  i2262.m_AtlasTextures = i2268
  i2262.m_AtlasTextureIndex = i2263[23]
  i2262.m_IsMultiAtlasTexturesEnabled = !!i2263[24]
  i2262.m_ClearDynamicDataOnBuild = !!i2263[25]
  var i2271 = i2263[26]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(request.d('UnityEngine.TextCore.GlyphRect', i2271[i + 0]));
  }
  i2262.m_UsedGlyphRects = i2270
  var i2273 = i2263[27]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.add(request.d('UnityEngine.TextCore.GlyphRect', i2273[i + 0]));
  }
  i2262.m_FreeGlyphRects = i2272
  i2262.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2263[28], i2262.m_fontInfo)
  i2262.m_AtlasWidth = i2263[29]
  i2262.m_AtlasHeight = i2263[30]
  i2262.m_AtlasPadding = i2263[31]
  i2262.m_AtlasRenderMode = i2263[32]
  var i2275 = i2263[33]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.add(request.d('TMPro.TMP_Glyph', i2275[i + 0]));
  }
  i2262.m_glyphInfoList = i2274
  i2262.m_KerningTable = request.d('TMPro.KerningTable', i2263[34], i2262.m_KerningTable)
  i2262.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2263[35], i2262.m_FontFeatureTable)
  var i2277 = i2263[36]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 1, i2276, '')
  }
  i2262.fallbackFontAssets = i2276
  var i2279 = i2263[37]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 1, i2278, '')
  }
  i2262.m_FallbackFontAssetTable = i2278
  i2262.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2263[38], i2262.m_CreationSettings)
  var i2281 = i2263[39]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('TMPro.TMP_FontWeightPair', i2281[i + 0]) );
  }
  i2262.m_FontWeightTable = i2280
  var i2283 = i2263[40]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('TMPro.TMP_FontWeightPair', i2283[i + 0]) );
  }
  i2262.fontWeights = i2282
  return i2262
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2285 = data
  i2284.m_FaceIndex = i2285[0]
  i2284.m_FamilyName = i2285[1]
  i2284.m_StyleName = i2285[2]
  i2284.m_PointSize = i2285[3]
  i2284.m_Scale = i2285[4]
  i2284.m_UnitsPerEM = i2285[5]
  i2284.m_LineHeight = i2285[6]
  i2284.m_AscentLine = i2285[7]
  i2284.m_CapLine = i2285[8]
  i2284.m_MeanLine = i2285[9]
  i2284.m_Baseline = i2285[10]
  i2284.m_DescentLine = i2285[11]
  i2284.m_SuperscriptOffset = i2285[12]
  i2284.m_SuperscriptSize = i2285[13]
  i2284.m_SubscriptOffset = i2285[14]
  i2284.m_SubscriptSize = i2285[15]
  i2284.m_UnderlineOffset = i2285[16]
  i2284.m_UnderlineThickness = i2285[17]
  i2284.m_StrikethroughOffset = i2285[18]
  i2284.m_StrikethroughThickness = i2285[19]
  i2284.m_TabWidth = i2285[20]
  return i2284
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2289 = data
  i2288.m_Index = i2289[0]
  i2288.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2289[1], i2288.m_Metrics)
  i2288.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2289[2], i2288.m_GlyphRect)
  i2288.m_Scale = i2289[3]
  i2288.m_AtlasIndex = i2289[4]
  i2288.m_ClassDefinitionType = i2289[5]
  return i2288
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2291 = data
  i2290.m_Width = i2291[0]
  i2290.m_Height = i2291[1]
  i2290.m_HorizontalBearingX = i2291[2]
  i2290.m_HorizontalBearingY = i2291[3]
  i2290.m_HorizontalAdvance = i2291[4]
  return i2290
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2293 = data
  i2292.m_X = i2293[0]
  i2292.m_Y = i2293[1]
  i2292.m_Width = i2293[2]
  i2292.m_Height = i2293[3]
  return i2292
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.TMP_Character' )
  var i2297 = data
  i2296.m_ElementType = i2297[0]
  i2296.m_Unicode = i2297[1]
  i2296.m_GlyphIndex = i2297[2]
  i2296.m_Scale = i2297[3]
  return i2296
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2302 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2303 = data
  i2302.Name = i2303[0]
  i2302.PointSize = i2303[1]
  i2302.Scale = i2303[2]
  i2302.CharacterCount = i2303[3]
  i2302.LineHeight = i2303[4]
  i2302.Baseline = i2303[5]
  i2302.Ascender = i2303[6]
  i2302.CapHeight = i2303[7]
  i2302.Descender = i2303[8]
  i2302.CenterLine = i2303[9]
  i2302.SuperscriptOffset = i2303[10]
  i2302.SubscriptOffset = i2303[11]
  i2302.SubSize = i2303[12]
  i2302.Underline = i2303[13]
  i2302.UnderlineThickness = i2303[14]
  i2302.strikethrough = i2303[15]
  i2302.strikethroughThickness = i2303[16]
  i2302.TabWidth = i2303[17]
  i2302.Padding = i2303[18]
  i2302.AtlasWidth = i2303[19]
  i2302.AtlasHeight = i2303[20]
  return i2302
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2307 = data
  i2306.id = i2307[0]
  i2306.x = i2307[1]
  i2306.y = i2307[2]
  i2306.width = i2307[3]
  i2306.height = i2307[4]
  i2306.xOffset = i2307[5]
  i2306.yOffset = i2307[6]
  i2306.xAdvance = i2307[7]
  i2306.scale = i2307[8]
  return i2306
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2308 = root || request.c( 'TMPro.KerningTable' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('TMPro.KerningPair', i2311[i + 0]));
  }
  i2308.kerningPairs = i2310
  return i2308
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.KerningPair' )
  var i2315 = data
  i2314.xOffset = i2315[0]
  i2314.m_FirstGlyph = i2315[1]
  i2314.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2315[2], i2314.m_FirstGlyphAdjustments)
  i2314.m_SecondGlyph = i2315[3]
  i2314.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2315[4], i2314.m_SecondGlyphAdjustments)
  i2314.m_IgnoreSpacingAdjustments = !!i2315[5]
  return i2314
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2316 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2319[i + 0]));
  }
  i2316.m_GlyphPairAdjustmentRecords = i2318
  return i2316
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2323 = data
  i2322.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2323[0], i2322.m_FirstAdjustmentRecord)
  i2322.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2323[1], i2322.m_SecondAdjustmentRecord)
  i2322.m_FeatureLookupFlags = i2323[2]
  return i2322
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2325 = data
  i2324.m_GlyphIndex = i2325[0]
  i2324.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2325[1], i2324.m_GlyphValueRecord)
  return i2324
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2326 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2327 = data
  i2326.m_XPlacement = i2327[0]
  i2326.m_YPlacement = i2327[1]
  i2326.m_XAdvance = i2327[2]
  i2326.m_YAdvance = i2327[3]
  return i2326
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2331 = data
  i2330.sourceFontFileName = i2331[0]
  i2330.sourceFontFileGUID = i2331[1]
  i2330.pointSizeSamplingMode = i2331[2]
  i2330.pointSize = i2331[3]
  i2330.padding = i2331[4]
  i2330.packingMode = i2331[5]
  i2330.atlasWidth = i2331[6]
  i2330.atlasHeight = i2331[7]
  i2330.characterSetSelectionMode = i2331[8]
  i2330.characterSequence = i2331[9]
  i2330.referencedFontAssetGUID = i2331[10]
  i2330.referencedTextAssetGUID = i2331[11]
  i2330.fontStyle = i2331[12]
  i2330.fontStyleModifier = i2331[13]
  i2330.renderMode = i2331[14]
  i2330.includeFontFeatures = !!i2331[15]
  return i2330
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'regularTypeface')
  request.r(i2335[2], i2335[3], 0, i2334, 'italicTypeface')
  return i2334
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2337 = data
  i2336.useSafeMode = !!i2337[0]
  i2336.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2337[1], i2336.safeModeOptions)
  i2336.timeScale = i2337[2]
  i2336.unscaledTimeScale = i2337[3]
  i2336.useSmoothDeltaTime = !!i2337[4]
  i2336.maxSmoothUnscaledTime = i2337[5]
  i2336.rewindCallbackMode = i2337[6]
  i2336.showUnityEditorReport = !!i2337[7]
  i2336.logBehaviour = i2337[8]
  i2336.drawGizmos = !!i2337[9]
  i2336.defaultRecyclable = !!i2337[10]
  i2336.defaultAutoPlay = i2337[11]
  i2336.defaultUpdateType = i2337[12]
  i2336.defaultTimeScaleIndependent = !!i2337[13]
  i2336.defaultEaseType = i2337[14]
  i2336.defaultEaseOvershootOrAmplitude = i2337[15]
  i2336.defaultEasePeriod = i2337[16]
  i2336.defaultAutoKill = !!i2337[17]
  i2336.defaultLoopType = i2337[18]
  i2336.debugMode = !!i2337[19]
  i2336.debugStoreTargetId = !!i2337[20]
  i2336.showPreviewPanel = !!i2337[21]
  i2336.storeSettingsLocation = i2337[22]
  i2336.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2337[23], i2336.modules)
  i2336.createASMDEF = !!i2337[24]
  i2336.showPlayingTweens = !!i2337[25]
  i2336.showPausedTweens = !!i2337[26]
  return i2336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2339 = data
  i2338.logBehaviour = i2339[0]
  i2338.nestedTweenFailureBehaviour = i2339[1]
  return i2338
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2341 = data
  i2340.showPanel = !!i2341[0]
  i2340.audioEnabled = !!i2341[1]
  i2340.physicsEnabled = !!i2341[2]
  i2340.physics2DEnabled = !!i2341[3]
  i2340.spriteEnabled = !!i2341[4]
  i2340.uiEnabled = !!i2341[5]
  i2340.textMeshProEnabled = !!i2341[6]
  i2340.tk2DEnabled = !!i2341[7]
  i2340.deAudioEnabled = !!i2341[8]
  i2340.deUnityExtendedEnabled = !!i2341[9]
  i2340.epoOutlineEnabled = !!i2341[10]
  return i2340
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.TMP_Settings' )
  var i2343 = data
  i2342.m_enableWordWrapping = !!i2343[0]
  i2342.m_enableKerning = !!i2343[1]
  i2342.m_enableExtraPadding = !!i2343[2]
  i2342.m_enableTintAllSprites = !!i2343[3]
  i2342.m_enableParseEscapeCharacters = !!i2343[4]
  i2342.m_EnableRaycastTarget = !!i2343[5]
  i2342.m_GetFontFeaturesAtRuntime = !!i2343[6]
  i2342.m_missingGlyphCharacter = i2343[7]
  i2342.m_warningsDisabled = !!i2343[8]
  request.r(i2343[9], i2343[10], 0, i2342, 'm_defaultFontAsset')
  i2342.m_defaultFontAssetPath = i2343[11]
  i2342.m_defaultFontSize = i2343[12]
  i2342.m_defaultAutoSizeMinRatio = i2343[13]
  i2342.m_defaultAutoSizeMaxRatio = i2343[14]
  i2342.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2343[15], i2343[16] )
  i2342.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2343[17], i2343[18] )
  i2342.m_autoSizeTextContainer = !!i2343[19]
  i2342.m_IsTextObjectScaleStatic = !!i2343[20]
  var i2345 = i2343[21]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 1, i2344, '')
  }
  i2342.m_fallbackFontAssets = i2344
  i2342.m_matchMaterialPreset = !!i2343[22]
  request.r(i2343[23], i2343[24], 0, i2342, 'm_defaultSpriteAsset')
  i2342.m_defaultSpriteAssetPath = i2343[25]
  i2342.m_enableEmojiSupport = !!i2343[26]
  i2342.m_MissingCharacterSpriteUnicode = i2343[27]
  i2342.m_defaultColorGradientPresetsPath = i2343[28]
  request.r(i2343[29], i2343[30], 0, i2342, 'm_defaultStyleSheet')
  i2342.m_StyleSheetsResourcePath = i2343[31]
  request.r(i2343[32], i2343[33], 0, i2342, 'm_leadingCharacters')
  request.r(i2343[34], i2343[35], 0, i2342, 'm_followingCharacters')
  i2342.m_UseModernHangulLineBreakingRules = !!i2343[36]
  return i2342
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2346 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2347 = data
  i2346.hashCode = i2347[0]
  request.r(i2347[1], i2347[2], 0, i2346, 'material')
  i2346.materialHashCode = i2347[3]
  request.r(i2347[4], i2347[5], 0, i2346, 'spriteSheet')
  var i2349 = i2347[6]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(request.d('TMPro.TMP_Sprite', i2349[i + 0]));
  }
  i2346.spriteInfoList = i2348
  var i2351 = i2347[7]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 1, i2350, '')
  }
  i2346.fallbackSpriteAssets = i2350
  i2346.m_Version = i2347[8]
  i2346.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2347[9], i2346.m_FaceInfo)
  var i2353 = i2347[10]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('TMPro.TMP_SpriteCharacter', i2353[i + 0]));
  }
  i2346.m_SpriteCharacterTable = i2352
  var i2355 = i2347[11]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('TMPro.TMP_SpriteGlyph', i2355[i + 0]));
  }
  i2346.m_SpriteGlyphTable = i2354
  return i2346
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.hashCode = i2359[1]
  i2358.unicode = i2359[2]
  i2358.pivot = new pc.Vec2( i2359[3], i2359[4] )
  request.r(i2359[5], i2359[6], 0, i2358, 'sprite')
  i2358.id = i2359[7]
  i2358.x = i2359[8]
  i2358.y = i2359[9]
  i2358.width = i2359[10]
  i2358.height = i2359[11]
  i2358.xOffset = i2359[12]
  i2358.yOffset = i2359[13]
  i2358.xAdvance = i2359[14]
  i2358.scale = i2359[15]
  return i2358
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2364 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2365 = data
  i2364.m_Name = i2365[0]
  i2364.m_HashCode = i2365[1]
  i2364.m_ElementType = i2365[2]
  i2364.m_Unicode = i2365[3]
  i2364.m_GlyphIndex = i2365[4]
  i2364.m_Scale = i2365[5]
  return i2364
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2368 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'sprite')
  i2368.m_Index = i2369[2]
  i2368.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2369[3], i2368.m_Metrics)
  i2368.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2369[4], i2368.m_GlyphRect)
  i2368.m_Scale = i2369[5]
  i2368.m_AtlasIndex = i2369[6]
  i2368.m_ClassDefinitionType = i2369[7]
  return i2368
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2370 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.add(request.d('TMPro.TMP_Style', i2373[i + 0]));
  }
  i2370.m_StyleList = i2372
  return i2370
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2376 = root || request.c( 'TMPro.TMP_Style' )
  var i2377 = data
  i2376.m_Name = i2377[0]
  i2376.m_HashCode = i2377[1]
  i2376.m_OpeningDefinition = i2377[2]
  i2376.m_ClosingDefinition = i2377[3]
  i2376.m_OpeningTagArray = i2377[4]
  i2376.m_ClosingTagArray = i2377[5]
  i2376.m_OpeningTagUnicodeArray = i2377[6]
  i2376.m_ClosingTagUnicodeArray = i2377[7]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2379 = data
  var i2381 = i2379[0]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2381[i + 0]) );
  }
  i2378.files = i2380
  i2378.componentToPrefabIds = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2385 = data
  i2384.path = i2385[0]
  request.r(i2385[1], i2385[2], 0, i2384, 'unityObject')
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2389[i + 0]) );
  }
  i2386.scriptsExecutionOrder = i2388
  var i2391 = i2387[1]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2391[i + 0]) );
  }
  i2386.sortingLayers = i2390
  var i2393 = i2387[2]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2393[i + 0]) );
  }
  i2386.cullingLayers = i2392
  i2386.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2387[3], i2386.timeSettings)
  i2386.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2387[4], i2386.physicsSettings)
  i2386.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2387[5], i2386.physics2DSettings)
  i2386.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2387[6], i2386.qualitySettings)
  i2386.enableRealtimeShadows = !!i2387[7]
  i2386.enableAutoInstancing = !!i2387[8]
  i2386.enableDynamicBatching = !!i2387[9]
  i2386.lightmapEncodingQuality = i2387[10]
  i2386.desiredColorSpace = i2387[11]
  var i2395 = i2387[12]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( i2395[i + 0] );
  }
  i2386.allTags = i2394
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.value = i2399[1]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2403 = data
  i2402.id = i2403[0]
  i2402.name = i2403[1]
  i2402.value = i2403[2]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2407 = data
  i2406.id = i2407[0]
  i2406.name = i2407[1]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2409 = data
  i2408.fixedDeltaTime = i2409[0]
  i2408.maximumDeltaTime = i2409[1]
  i2408.timeScale = i2409[2]
  i2408.maximumParticleTimestep = i2409[3]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2411 = data
  i2410.gravity = new pc.Vec3( i2411[0], i2411[1], i2411[2] )
  i2410.defaultSolverIterations = i2411[3]
  i2410.bounceThreshold = i2411[4]
  i2410.autoSyncTransforms = !!i2411[5]
  i2410.autoSimulation = !!i2411[6]
  var i2413 = i2411[7]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2413[i + 0]) );
  }
  i2410.collisionMatrix = i2412
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.layerId = i2417[1]
  i2416.otherLayerId = i2417[2]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'material')
  i2418.gravity = new pc.Vec2( i2419[2], i2419[3] )
  i2418.positionIterations = i2419[4]
  i2418.velocityIterations = i2419[5]
  i2418.velocityThreshold = i2419[6]
  i2418.maxLinearCorrection = i2419[7]
  i2418.maxAngularCorrection = i2419[8]
  i2418.maxTranslationSpeed = i2419[9]
  i2418.maxRotationSpeed = i2419[10]
  i2418.baumgarteScale = i2419[11]
  i2418.baumgarteTOIScale = i2419[12]
  i2418.timeToSleep = i2419[13]
  i2418.linearSleepTolerance = i2419[14]
  i2418.angularSleepTolerance = i2419[15]
  i2418.defaultContactOffset = i2419[16]
  i2418.autoSimulation = !!i2419[17]
  i2418.queriesHitTriggers = !!i2419[18]
  i2418.queriesStartInColliders = !!i2419[19]
  i2418.callbacksOnDisable = !!i2419[20]
  i2418.reuseCollisionCallbacks = !!i2419[21]
  i2418.autoSyncTransforms = !!i2419[22]
  var i2421 = i2419[23]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2421[i + 0]) );
  }
  i2418.collisionMatrix = i2420
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.layerId = i2425[1]
  i2424.otherLayerId = i2425[2]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2429[i + 0]) );
  }
  i2426.qualityLevels = i2428
  var i2431 = i2427[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( i2431[i + 0] );
  }
  i2426.names = i2430
  i2426.shadows = i2427[2]
  i2426.anisotropicFiltering = i2427[3]
  i2426.antiAliasing = i2427[4]
  i2426.lodBias = i2427[5]
  i2426.shadowCascades = i2427[6]
  i2426.shadowDistance = i2427[7]
  i2426.shadowmaskMode = i2427[8]
  i2426.shadowProjection = i2427[9]
  i2426.shadowResolution = i2427[10]
  i2426.softParticles = !!i2427[11]
  i2426.softVegetation = !!i2427[12]
  i2426.activeColorSpace = i2427[13]
  i2426.desiredColorSpace = i2427[14]
  i2426.masterTextureLimit = i2427[15]
  i2426.maxQueuedFrames = i2427[16]
  i2426.particleRaycastBudget = i2427[17]
  i2426.pixelLightCount = i2427[18]
  i2426.realtimeReflectionProbes = !!i2427[19]
  i2426.shadowCascade2Split = i2427[20]
  i2426.shadowCascade4Split = new pc.Vec3( i2427[21], i2427[22], i2427[23] )
  i2426.streamingMipmapsActive = !!i2427[24]
  i2426.vSyncCount = i2427[25]
  i2426.asyncUploadBufferSize = i2427[26]
  i2426.asyncUploadTimeSlice = i2427[27]
  i2426.billboardsFaceCameraPosition = !!i2427[28]
  i2426.shadowNearPlaneOffset = i2427[29]
  i2426.streamingMipmapsMemoryBudget = i2427[30]
  i2426.maximumLODLevel = i2427[31]
  i2426.streamingMipmapsAddAllCameras = !!i2427[32]
  i2426.streamingMipmapsMaxLevelReduction = i2427[33]
  i2426.streamingMipmapsRenderersPerFrame = i2427[34]
  i2426.resolutionScalingFixedDPIFactor = i2427[35]
  i2426.streamingMipmapsMaxFileIORequests = i2427[36]
  i2426.currentQualityLevel = i2427[37]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2437 = data
  i2436.weight = i2437[0]
  i2436.vertices = i2437[1]
  i2436.normals = i2437[2]
  i2436.tangents = i2437[3]
  return i2436
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2439 = data
  i2438.xPlacement = i2439[0]
  i2438.yPlacement = i2439[1]
  i2438.xAdvance = i2439[2]
  i2438.yAdvance = i2439[3]
  return i2438
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[9],"72":[22],"73":[28],"74":[28],"75":[28],"76":[28],"77":[28],"78":[28],"79":[28],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[22],"95":[5],"96":[97],"98":[97],"13":[12],"24":[22],"99":[100],"101":[12],"102":[12],"16":[13],"20":[19,12],"103":[12],"15":[13],"104":[12],"105":[12],"106":[12],"107":[12],"108":[12],"109":[12],"110":[12],"111":[12],"112":[12],"113":[19,12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[19,12],"119":[12],"120":[29],"121":[29],"30":[29],"122":[29],"123":[22],"124":[22],"125":[100],"126":[12],"127":[5,12],"44":[12,19],"128":[12],"129":[19,12],"130":[5],"131":[19,12],"132":[12],"133":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Tree","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","Wall","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","AdaptiveCameraPosition","UnityEngine.Light","Conveyor","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BuildManager","UnityEngine.UI.Button","UnityEngine.GameObject","MoneyController","CharactersMover","SimplePoint","LoadPoint","UnloadPoint","Forklift","Garage","ChopperManager","Chopper","ButtonLight","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Build","Truck","MoneyBalance","MoneyFlyAnimation","ClickCta","TruckManager","TruckUnloadPoint","TruckMover","GameManager","SimpleAudioManager","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "15.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Lumber";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "b0c19cff2bc3b4b4086704796cb119ee";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1721";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4435";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Lumber";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d793656d-33a1-4960-8a8d-6fe9568d0a3c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

