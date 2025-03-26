var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointSpring' )
  var i607 = data
  i606.spring = i607[0]
  i606.damper = i607[1]
  i606.targetPosition = i607[2]
  return i606
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointMotor' )
  var i609 = data
  i608.m_TargetVelocity = i609[0]
  i608.m_Force = i609[1]
  i608.m_FreeSpin = i609[2]
  return i608
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointLimits' )
  var i611 = data
  i610.m_Min = i611[0]
  i610.m_Max = i611[1]
  i610.m_Bounciness = i611[2]
  i610.m_BounceMinVelocity = i611[3]
  i610.m_ContactDistance = i611[4]
  i610.minBounce = i611[5]
  i610.maxBounce = i611[6]
  return i610
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointDrive' )
  var i613 = data
  i612.m_PositionSpring = i613[0]
  i612.m_PositionDamper = i613[1]
  i612.m_MaximumForce = i613[2]
  i612.m_UseAcceleration = i613[3]
  return i612
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i615 = data
  i614.m_Spring = i615[0]
  i614.m_Damper = i615[1]
  return i614
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i617 = data
  i616.m_Limit = i617[0]
  i616.m_Bounciness = i617[1]
  i616.m_ContactDistance = i617[2]
  return i616
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i619 = data
  i618.m_ExtremumSlip = i619[0]
  i618.m_ExtremumValue = i619[1]
  i618.m_AsymptoteSlip = i619[2]
  i618.m_AsymptoteValue = i619[3]
  i618.m_Stiffness = i619[4]
  return i618
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i621 = data
  i620.m_LowerAngle = i621[0]
  i620.m_UpperAngle = i621[1]
  return i620
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i623 = data
  i622.m_MotorSpeed = i623[0]
  i622.m_MaximumMotorTorque = i623[1]
  return i622
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i625 = data
  i624.m_DampingRatio = i625[0]
  i624.m_Frequency = i625[1]
  i624.m_Angle = i625[2]
  return i624
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i627 = data
  i626.m_LowerTranslation = i627[0]
  i626.m_UpperTranslation = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i629 = data
  i628.name = i629[0]
  i628.width = i629[1]
  i628.height = i629[2]
  i628.mipmapCount = i629[3]
  i628.anisoLevel = i629[4]
  i628.filterMode = i629[5]
  i628.hdr = !!i629[6]
  i628.format = i629[7]
  i628.wrapMode = i629[8]
  i628.alphaIsTransparency = !!i629[9]
  i628.alphaSource = i629[10]
  i628.graphicsFormat = i629[11]
  i628.sRGBTexture = !!i629[12]
  i628.desiredColorSpace = i629[13]
  i628.wrapU = i629[14]
  i628.wrapV = i629[15]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i631 = data
  i630.name = i631[0]
  i630.halfPrecision = !!i631[1]
  i630.useUInt32IndexFormat = !!i631[2]
  i630.vertexCount = i631[3]
  i630.aabb = i631[4]
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( !!i633[i + 0] );
  }
  i630.streams = i632
  i630.vertices = i631[6]
  var i635 = i631[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i635[i + 0]) );
  }
  i630.subMeshes = i634
  var i637 = i631[8]
  var i636 = []
  for(var i = 0; i < i637.length; i += 16) {
    i636.push( new pc.Mat4().setData(i637[i + 0], i637[i + 1], i637[i + 2], i637[i + 3],  i637[i + 4], i637[i + 5], i637[i + 6], i637[i + 7],  i637[i + 8], i637[i + 9], i637[i + 10], i637[i + 11],  i637[i + 12], i637[i + 13], i637[i + 14], i637[i + 15]) );
  }
  i630.bindposes = i636
  var i639 = i631[9]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i639[i + 0]) );
  }
  i630.blendShapes = i638
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i645 = data
  i644.triangles = i645[0]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i651 = data
  i650.name = i651[0]
  var i653 = i651[1]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i653[i + 0]) );
  }
  i650.frames = i652
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i654 = root || new pc.UnityMaterial()
  var i655 = data
  i654.name = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'shader')
  i654.renderQueue = i655[3]
  i654.enableInstancing = !!i655[4]
  var i657 = i655[5]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i657[i + 0]) );
  }
  i654.floatParameters = i656
  var i659 = i655[6]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i659[i + 0]) );
  }
  i654.colorParameters = i658
  var i661 = i655[7]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i661[i + 0]) );
  }
  i654.vectorParameters = i660
  var i663 = i655[8]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i663[i + 0]) );
  }
  i654.textureParameters = i662
  var i665 = i655[9]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i665[i + 0]) );
  }
  i654.materialFlags = i664
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = new pc.Color(i673[1], i673[2], i673[3], i673[4])
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i677 = data
  i676.name = i677[0]
  i676.value = new pc.Vec4( i677[1], i677[2], i677[3], i677[4] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i681 = data
  i680.name = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'value')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i685 = data
  i684.name = i685[0]
  i684.enabled = !!i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i687 = data
  i686.position = new pc.Vec3( i687[0], i687[1], i687[2] )
  i686.scale = new pc.Vec3( i687[3], i687[4], i687[5] )
  i686.rotation = new pc.Quat(i687[6], i687[7], i687[8], i687[9])
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'sharedMesh')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'additionalVertexStreams')
  i690.enabled = !!i691[2]
  request.r(i691[3], i691[4], 0, i690, 'sharedMaterial')
  var i693 = i691[5]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[6]
  i690.shadowCastingMode = i691[7]
  i690.sortingLayerID = i691[8]
  i690.sortingOrder = i691[9]
  i690.lightmapIndex = i691[10]
  i690.lightmapSceneIndex = i691[11]
  i690.lightmapScaleOffset = new pc.Vec4( i691[12], i691[13], i691[14], i691[15] )
  i690.lightProbeUsage = i691[16]
  i690.reflectionProbeUsage = i691[17]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i697 = data
  i696.name = i697[0]
  i696.tagId = i697[1]
  i696.enabled = !!i697[2]
  i696.isStatic = !!i697[3]
  i696.layer = i697[4]
  return i696
}

Deserializers["Tree"] = function (request, data, root) {
  var i698 = root || request.c( 'Tree' )
  var i699 = data
  i698.flashSpeed = i699[0]
  i698.pauseBetweenFlashes = i699[1]
  i698.flashCount = i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i701 = data
  i700.enabled = !!i701[0]
  request.r(i701[1], i701[2], 0, i700, 'sharedMaterial')
  var i703 = i701[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sharedMaterials = i702
  i700.receiveShadows = !!i701[4]
  i700.shadowCastingMode = i701[5]
  i700.sortingLayerID = i701[6]
  i700.sortingOrder = i701[7]
  i700.lightmapIndex = i701[8]
  i700.lightmapSceneIndex = i701[9]
  i700.lightmapScaleOffset = new pc.Vec4( i701[10], i701[11], i701[12], i701[13] )
  i700.lightProbeUsage = i701[14]
  i700.reflectionProbeUsage = i701[15]
  request.r(i701[16], i701[17], 0, i700, 'sharedMesh')
  var i705 = i701[18]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i700.bones = i704
  i700.updateWhenOffscreen = !!i701[19]
  i700.localBounds = i701[20]
  request.r(i701[21], i701[22], 0, i700, 'rootBone')
  var i707 = i701[23]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i707[i + 0]) );
  }
  i700.blendShapesWeights = i706
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i713 = data
  i712.weight = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i715 = data
  i714.center = new pc.Vec3( i715[0], i715[1], i715[2] )
  i714.size = new pc.Vec3( i715[3], i715[4], i715[5] )
  i714.enabled = !!i715[6]
  i714.isTrigger = !!i715[7]
  request.r(i715[8], i715[9], 0, i714, 'material')
  return i714
}

Deserializers["Wall"] = function (request, data, root) {
  var i716 = root || request.c( 'Wall' )
  var i717 = data
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i719 = data
  i718.name = i719[0]
  i718.atlasId = i719[1]
  i718.mipmapCount = i719[2]
  i718.hdr = !!i719[3]
  i718.size = i719[4]
  i718.anisoLevel = i719[5]
  i718.filterMode = i719[6]
  var i721 = i719[7]
  var i720 = []
  for(var i = 0; i < i721.length; i += 4) {
    i720.push( UnityEngine.Rect.MinMaxRect(i721[i + 0], i721[i + 1], i721[i + 2], i721[i + 3]) );
  }
  i718.rects = i720
  i718.wrapU = i719[8]
  i718.wrapV = i719[9]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i725 = data
  i724.name = i725[0]
  i724.index = i725[1]
  i724.startup = !!i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i727 = data
  i726.pivot = new pc.Vec2( i727[0], i727[1] )
  i726.anchorMin = new pc.Vec2( i727[2], i727[3] )
  i726.anchorMax = new pc.Vec2( i727[4], i727[5] )
  i726.sizeDelta = new pc.Vec2( i727[6], i727[7] )
  i726.anchoredPosition3D = new pc.Vec3( i727[8], i727[9], i727[10] )
  i726.rotation = new pc.Quat(i727[11], i727[12], i727[13], i727[14])
  i726.scale = new pc.Vec3( i727[15], i727[16], i727[17] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i729 = data
  i728.enabled = !!i729[0]
  i728.planeDistance = i729[1]
  i728.referencePixelsPerUnit = i729[2]
  i728.isFallbackOverlay = !!i729[3]
  i728.renderMode = i729[4]
  i728.renderOrder = i729[5]
  i728.sortingLayerName = i729[6]
  i728.sortingOrder = i729[7]
  i728.scaleFactor = i729[8]
  request.r(i729[9], i729[10], 0, i728, 'worldCamera')
  i728.overrideSorting = !!i729[11]
  i728.pixelPerfect = !!i729[12]
  i728.targetDisplay = i729[13]
  i728.overridePixelPerfect = !!i729[14]
  return i728
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i731 = data
  i730.m_UiScaleMode = i731[0]
  i730.m_ReferencePixelsPerUnit = i731[1]
  i730.m_ScaleFactor = i731[2]
  i730.m_ReferenceResolution = new pc.Vec2( i731[3], i731[4] )
  i730.m_ScreenMatchMode = i731[5]
  i730.m_MatchWidthOrHeight = i731[6]
  i730.m_PhysicalUnit = i731[7]
  i730.m_FallbackScreenDPI = i731[8]
  i730.m_DefaultSpriteDPI = i731[9]
  i730.m_DynamicPixelsPerUnit = i731[10]
  i730.m_PresetInfoIsWorld = !!i731[11]
  return i730
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i733 = data
  i732.m_IgnoreReversedGraphics = !!i733[0]
  i732.m_BlockingObjects = i733[1]
  i732.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i733[2] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'animatorController')
  request.r(i735[2], i735[3], 0, i734, 'avatar')
  i734.updateMode = i735[4]
  i734.hasTransformHierarchy = !!i735[5]
  i734.applyRootMotion = !!i735[6]
  var i737 = i735[7]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.humanBones = i736
  i734.enabled = !!i735[8]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i739 = data
  i738.cullTransparentMesh = !!i739[0]
  return i738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Image' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Sprite')
  i740.m_Type = i741[2]
  i740.m_PreserveAspect = !!i741[3]
  i740.m_FillCenter = !!i741[4]
  i740.m_FillMethod = i741[5]
  i740.m_FillAmount = i741[6]
  i740.m_FillClockwise = !!i741[7]
  i740.m_FillOrigin = i741[8]
  i740.m_UseSpriteMesh = !!i741[9]
  i740.m_PixelsPerUnitMultiplier = i741[10]
  request.r(i741[11], i741[12], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[13]
  i740.m_Color = new pc.Color(i741[14], i741[15], i741[16], i741[17])
  i740.m_RaycastTarget = !!i741[18]
  i740.m_RaycastPadding = new pc.Vec4( i741[19], i741[20], i741[21], i741[22] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.aspect = i743[1]
  i742.orthographic = !!i743[2]
  i742.orthographicSize = i743[3]
  i742.backgroundColor = new pc.Color(i743[4], i743[5], i743[6], i743[7])
  i742.nearClipPlane = i743[8]
  i742.farClipPlane = i743[9]
  i742.fieldOfView = i743[10]
  i742.depth = i743[11]
  i742.clearFlags = i743[12]
  i742.cullingMask = i743[13]
  i742.rect = i743[14]
  request.r(i743[15], i743[16], 0, i742, 'targetTexture')
  i742.usePhysicalProperties = !!i743[17]
  i742.focalLength = i743[18]
  i742.sensorSize = new pc.Vec2( i743[19], i743[20] )
  i742.lensShift = new pc.Vec2( i743[21], i743[22] )
  i742.gateFit = i743[23]
  i742.commandBufferCount = i743[24]
  i742.cameraType = i743[25]
  return i742
}

Deserializers["AdaptiveCameraPosition"] = function (request, data, root) {
  var i744 = root || request.c( 'AdaptiveCameraPosition' )
  var i745 = data
  i744.portraitSettings = request.d('AdaptiveCameraPosition+CameraSettings', i745[0], i744.portraitSettings)
  i744.landscapeSettings = request.d('AdaptiveCameraPosition+CameraSettings', i745[1], i744.landscapeSettings)
  i744.transitionSpeed = i745[2]
  i744.aspectRatioThreshold = i745[3]
  i744.debugMode = !!i745[4]
  return i744
}

Deserializers["AdaptiveCameraPosition+CameraSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'AdaptiveCameraPosition+CameraSettings' )
  var i747 = data
  i746.position = new pc.Vec3( i747[0], i747[1], i747[2] )
  i746.rotation = new pc.Vec3( i747[3], i747[4], i747[5] )
  i746.orthographicSize = i747[6]
  i746.fieldOfView = i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i749 = data
  i748.enabled = !!i749[0]
  i748.type = i749[1]
  i748.color = new pc.Color(i749[2], i749[3], i749[4], i749[5])
  i748.cullingMask = i749[6]
  i748.intensity = i749[7]
  i748.range = i749[8]
  i748.spotAngle = i749[9]
  i748.shadows = i749[10]
  i748.shadowNormalBias = i749[11]
  i748.shadowBias = i749[12]
  i748.shadowStrength = i749[13]
  i748.shadowResolution = i749[14]
  i748.lightmapBakeType = i749[15]
  i748.renderMode = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'cookie')
  i748.cookieSize = i749[19]
  return i748
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i750 = root || request.c( 'Conveyor' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'canvasAnimator')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i753 = data
  i752.center = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.radius = i753[3]
  i752.height = i753[4]
  i752.direction = i753[5]
  i752.enabled = !!i753[6]
  i752.isTrigger = !!i753[7]
  request.r(i753[8], i753[9], 0, i752, 'material')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i755 = data
  i754.mass = i755[0]
  i754.drag = i755[1]
  i754.angularDrag = i755[2]
  i754.useGravity = !!i755[3]
  i754.isKinematic = !!i755[4]
  i754.constraints = i755[5]
  i754.maxAngularVelocity = i755[6]
  i754.collisionDetectionMode = i755[7]
  i754.interpolation = i755[8]
  return i754
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_FirstSelected')
  i756.m_sendNavigationEvents = !!i757[2]
  i756.m_DragThreshold = i757[3]
  return i756
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i759 = data
  i758.m_HorizontalAxis = i759[0]
  i758.m_VerticalAxis = i759[1]
  i758.m_SubmitButton = i759[2]
  i758.m_CancelButton = i759[3]
  i758.m_InputActionsPerSecond = i759[4]
  i758.m_RepeatDelay = i759[5]
  i758.m_ForceModuleActive = !!i759[6]
  i758.m_SendPointerHoverToParent = !!i759[7]
  return i758
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i760 = root || request.c( 'BuildManager' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, '_buildButton1')
  request.r(i761[2], i761[3], 0, i760, '_buildButton2')
  request.r(i761[4], i761[5], 0, i760, '_buildButton3')
  request.r(i761[6], i761[7], 0, i760, '_buildButtonObject1')
  request.r(i761[8], i761[9], 0, i760, '_buildButtonObject2')
  request.r(i761[10], i761[11], 0, i760, '_build1')
  request.r(i761[12], i761[13], 0, i760, '_build2')
  request.r(i761[14], i761[15], 0, i760, '_build3')
  request.r(i761[16], i761[17], 0, i760, '_moneyController')
  return i760
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i762 = root || request.c( 'CharactersMover' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762._normalRoutePoints = i764
  var i767 = i763[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i762._unloadPoints = i766
  request.r(i763[2], i763[3], 0, i762, '_defaultUnloadPoint')
  i762._checkTruckAvailabilityInterval = i763[4]
  return i762
}

Deserializers["Forklift"] = function (request, data, root) {
  var i772 = root || request.c( 'Forklift' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i772._cargo = i774
  return i772
}

Deserializers["Garage"] = function (request, data, root) {
  var i778 = root || request.c( 'Garage' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'chopper')
  return i778
}

Deserializers["ChopperManager"] = function (request, data, root) {
  var i780 = root || request.c( 'ChopperManager' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Chopper')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780._choppers = i782
  return i780
}

Deserializers["Chopper"] = function (request, data, root) {
  var i786 = root || request.c( 'Chopper' )
  var i787 = data
  var i789 = i787[0]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i786._cargo = i788
  return i786
}

Deserializers["ButtonLight"] = function (request, data, root) {
  var i790 = root || request.c( 'ButtonLight' )
  var i791 = data
  i790.flashSpeed = i791[0]
  i790.pauseBetweenFlashes = i791[1]
  i790.flashCount = i791[2]
  return i790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button' )
  var i793 = data
  i792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i793[0], i792.m_OnClick)
  i792.m_Navigation = request.d('UnityEngine.UI.Navigation', i793[1], i792.m_Navigation)
  i792.m_Transition = i793[2]
  i792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i793[3], i792.m_Colors)
  i792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i793[4], i792.m_SpriteState)
  i792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i793[5], i792.m_AnimationTriggers)
  i792.m_Interactable = !!i793[6]
  request.r(i793[7], i793[8], 0, i792, 'm_TargetGraphic')
  return i792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i795 = data
  i794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i795[0], i794.m_PersistentCalls)
  return i794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.Events.PersistentCall', i799[i + 0]));
  }
  i796.m_Calls = i798
  return i796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Target')
  i802.m_TargetAssemblyTypeName = i803[2]
  i802.m_MethodName = i803[3]
  i802.m_Mode = i803[4]
  i802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i803[5], i802.m_Arguments)
  i802.m_CallState = i803[6]
  return i802
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_ObjectArgument')
  i804.m_ObjectArgumentAssemblyTypeName = i805[2]
  i804.m_IntArgument = i805[3]
  i804.m_FloatArgument = i805[4]
  i804.m_StringArgument = i805[5]
  i804.m_BoolArgument = !!i805[6]
  return i804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i807 = data
  i806.m_Mode = i807[0]
  i806.m_WrapAround = !!i807[1]
  request.r(i807[2], i807[3], 0, i806, 'm_SelectOnUp')
  request.r(i807[4], i807[5], 0, i806, 'm_SelectOnDown')
  request.r(i807[6], i807[7], 0, i806, 'm_SelectOnLeft')
  request.r(i807[8], i807[9], 0, i806, 'm_SelectOnRight')
  return i806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i809 = data
  i808.m_NormalColor = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.m_HighlightedColor = new pc.Color(i809[4], i809[5], i809[6], i809[7])
  i808.m_PressedColor = new pc.Color(i809[8], i809[9], i809[10], i809[11])
  i808.m_SelectedColor = new pc.Color(i809[12], i809[13], i809[14], i809[15])
  i808.m_DisabledColor = new pc.Color(i809[16], i809[17], i809[18], i809[19])
  i808.m_ColorMultiplier = i809[20]
  i808.m_FadeDuration = i809[21]
  return i808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_HighlightedSprite')
  request.r(i811[2], i811[3], 0, i810, 'm_PressedSprite')
  request.r(i811[4], i811[5], 0, i810, 'm_SelectedSprite')
  request.r(i811[6], i811[7], 0, i810, 'm_DisabledSprite')
  return i810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i813 = data
  i812.m_NormalTrigger = i813[0]
  i812.m_HighlightedTrigger = i813[1]
  i812.m_PressedTrigger = i813[2]
  i812.m_SelectedTrigger = i813[3]
  i812.m_DisabledTrigger = i813[4]
  return i812
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i815 = data
  i814.m_hasFontAssetChanged = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'm_baseMaterial')
  i814.m_maskOffset = new pc.Vec4( i815[3], i815[4], i815[5], i815[6] )
  i814.m_text = i815[7]
  i814.m_isRightToLeft = !!i815[8]
  request.r(i815[9], i815[10], 0, i814, 'm_fontAsset')
  request.r(i815[11], i815[12], 0, i814, 'm_sharedMaterial')
  var i817 = i815[13]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.m_fontSharedMaterials = i816
  request.r(i815[14], i815[15], 0, i814, 'm_fontMaterial')
  var i819 = i815[16]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i814.m_fontMaterials = i818
  i814.m_fontColor32 = UnityEngine.Color32.ConstructColor(i815[17], i815[18], i815[19], i815[20])
  i814.m_fontColor = new pc.Color(i815[21], i815[22], i815[23], i815[24])
  i814.m_enableVertexGradient = !!i815[25]
  i814.m_colorMode = i815[26]
  i814.m_fontColorGradient = request.d('TMPro.VertexGradient', i815[27], i814.m_fontColorGradient)
  request.r(i815[28], i815[29], 0, i814, 'm_fontColorGradientPreset')
  request.r(i815[30], i815[31], 0, i814, 'm_spriteAsset')
  i814.m_tintAllSprites = !!i815[32]
  request.r(i815[33], i815[34], 0, i814, 'm_StyleSheet')
  i814.m_TextStyleHashCode = i815[35]
  i814.m_overrideHtmlColors = !!i815[36]
  i814.m_faceColor = UnityEngine.Color32.ConstructColor(i815[37], i815[38], i815[39], i815[40])
  i814.m_fontSize = i815[41]
  i814.m_fontSizeBase = i815[42]
  i814.m_fontWeight = i815[43]
  i814.m_enableAutoSizing = !!i815[44]
  i814.m_fontSizeMin = i815[45]
  i814.m_fontSizeMax = i815[46]
  i814.m_fontStyle = i815[47]
  i814.m_HorizontalAlignment = i815[48]
  i814.m_VerticalAlignment = i815[49]
  i814.m_textAlignment = i815[50]
  i814.m_characterSpacing = i815[51]
  i814.m_wordSpacing = i815[52]
  i814.m_lineSpacing = i815[53]
  i814.m_lineSpacingMax = i815[54]
  i814.m_paragraphSpacing = i815[55]
  i814.m_charWidthMaxAdj = i815[56]
  i814.m_enableWordWrapping = !!i815[57]
  i814.m_wordWrappingRatios = i815[58]
  i814.m_overflowMode = i815[59]
  request.r(i815[60], i815[61], 0, i814, 'm_linkedTextComponent')
  request.r(i815[62], i815[63], 0, i814, 'parentLinkedComponent')
  i814.m_enableKerning = !!i815[64]
  i814.m_enableExtraPadding = !!i815[65]
  i814.checkPaddingRequired = !!i815[66]
  i814.m_isRichText = !!i815[67]
  i814.m_parseCtrlCharacters = !!i815[68]
  i814.m_isOrthographic = !!i815[69]
  i814.m_isCullingEnabled = !!i815[70]
  i814.m_horizontalMapping = i815[71]
  i814.m_verticalMapping = i815[72]
  i814.m_uvLineOffset = i815[73]
  i814.m_geometrySortingOrder = i815[74]
  i814.m_IsTextObjectScaleStatic = !!i815[75]
  i814.m_VertexBufferAutoSizeReduction = !!i815[76]
  i814.m_useMaxVisibleDescender = !!i815[77]
  i814.m_pageToDisplay = i815[78]
  i814.m_margin = new pc.Vec4( i815[79], i815[80], i815[81], i815[82] )
  i814.m_isUsingLegacyAnimationComponent = !!i815[83]
  i814.m_isVolumetricText = !!i815[84]
  request.r(i815[85], i815[86], 0, i814, 'm_Material')
  i814.m_Maskable = !!i815[87]
  i814.m_Color = new pc.Color(i815[88], i815[89], i815[90], i815[91])
  i814.m_RaycastTarget = !!i815[92]
  i814.m_RaycastPadding = new pc.Vec4( i815[93], i815[94], i815[95], i815[96] )
  return i814
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.VertexGradient' )
  var i821 = data
  i820.topLeft = new pc.Color(i821[0], i821[1], i821[2], i821[3])
  i820.topRight = new pc.Color(i821[4], i821[5], i821[6], i821[7])
  i820.bottomLeft = new pc.Color(i821[8], i821[9], i821[10], i821[11])
  i820.bottomRight = new pc.Color(i821[12], i821[13], i821[14], i821[15])
  return i820
}

Deserializers["Build"] = function (request, data, root) {
  var i822 = root || request.c( 'Build' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'building')
  return i822
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i824 = root || request.c( 'UnloadPoint' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, '_targetTruck')
  i824._allowForkliftToLoadHalfFullTrucks = !!i825[2]
  i824.delay = i825[3]
  i824.moveDuration = i825[4]
  return i824
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i826 = root || request.c( 'LoadPoint' )
  var i827 = data
  i826.delay = i827[0]
  i826.moveDuration = i827[1]
  return i826
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i828 = root || request.c( 'SimplePoint' )
  var i829 = data
  i828.delay = i829[0]
  i828.moveDuration = i829[1]
  return i828
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i830 = root || request.c( 'MoneyController' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, '_moneyBalance')
  request.r(i831[2], i831[3], 0, i830, '_moneyFlyAnimation')
  return i830
}

Deserializers["MoneyFlyAnimation"] = function (request, data, root) {
  var i832 = root || request.c( 'MoneyFlyAnimation' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'worldStartPoint')
  request.r(i833[2], i833[3], 0, i832, 'moneyPrefab3D')
  i832.poolSize = i833[4]
  i832.minDuration = i833[5]
  i832.maxDuration = i833[6]
  i832.spread = i833[7]
  request.r(i833[8], i833[9], 0, i832, 'uiTargetPoint')
  return i832
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i834 = root || request.c( 'MoneyBalance' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, '_text')
  return i834
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i836 = root || request.c( 'ClickCta' )
  var i837 = data
  return i836
}

Deserializers["TruckManager"] = function (request, data, root) {
  var i838 = root || request.c( 'TruckManager' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('Truck')))
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 1, i840, '')
  }
  i838._trucks = i840
  request.r(i839[1], i839[2], 0, i838, '_unloadPoint')
  i838._sendAllTrucksWhenAllFull = !!i839[3]
  return i838
}

Deserializers["TruckUnloadPoint"] = function (request, data, root) {
  var i844 = root || request.c( 'TruckUnloadPoint' )
  var i845 = data
  i844._unloadDuration = i845[0]
  request.r(i845[1], i845[2], 0, i844, '_truckStopPosition')
  i844.delay = i845[3]
  i844.moveDuration = i845[4]
  return i844
}

Deserializers["Truck"] = function (request, data, root) {
  var i846 = root || request.c( 'Truck' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'progressBarImage')
  var i849 = i847[2]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 1, i848, '')
  }
  i846._cargoSlots = i848
  i846._maxCapacity = i847[3]
  i846._logLoadSoundName = i847[4]
  i846._truckFullSoundName = i847[5]
  i846._playCargoSounds = !!i847[6]
  return i846
}

Deserializers["TruckMover"] = function (request, data, root) {
  var i850 = root || request.c( 'TruckMover' )
  var i851 = data
  i850._moveEase = i851[0]
  request.r(i851[1], i851[2], 0, i850, '_startPosition')
  request.r(i851[3], i851[4], 0, i850, '_engineSound')
  return i850
}

Deserializers["GameManager"] = function (request, data, root) {
  var i852 = root || request.c( 'GameManager' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'tutorialObject')
  request.r(i853[2], i853[3], 0, i852, 'tutorialAnimator')
  i852.idleTimeForTutorial = i853[4]
  request.r(i853[5], i853[6], 0, i852, 'upgradeButton')
  request.r(i853[7], i853[8], 0, i852, 'upgradeButtonGameObject')
  request.r(i853[9], i853[10], 0, i852, 'secondRequiredButton')
  request.r(i853[11], i853[12], 0, i852, 'packShotObject')
  request.r(i853[13], i853[14], 0, i852, 'moneyController')
  request.r(i853[15], i853[16], 0, i852, 'buildManager')
  return i852
}

Deserializers["SimpleAudioManager"] = function (request, data, root) {
  var i854 = root || request.c( 'SimpleAudioManager' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'progressBarSound')
  request.r(i855[2], i855[3], 0, i854, 'conveyorAnimationSound')
  request.r(i855[4], i855[5], 0, i854, 'logLoadSound')
  request.r(i855[6], i855[7], 0, i854, 'buttonClickSound')
  request.r(i855[8], i855[9], 0, i854, 'houseAppearSound')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i857 = data
  i856.ambientIntensity = i857[0]
  i856.reflectionIntensity = i857[1]
  i856.ambientMode = i857[2]
  i856.ambientLight = new pc.Color(i857[3], i857[4], i857[5], i857[6])
  i856.ambientSkyColor = new pc.Color(i857[7], i857[8], i857[9], i857[10])
  i856.ambientGroundColor = new pc.Color(i857[11], i857[12], i857[13], i857[14])
  i856.ambientEquatorColor = new pc.Color(i857[15], i857[16], i857[17], i857[18])
  i856.fogColor = new pc.Color(i857[19], i857[20], i857[21], i857[22])
  i856.fogEndDistance = i857[23]
  i856.fogStartDistance = i857[24]
  i856.fogDensity = i857[25]
  i856.fog = !!i857[26]
  request.r(i857[27], i857[28], 0, i856, 'skybox')
  i856.fogMode = i857[29]
  var i859 = i857[30]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i859[i + 0]) );
  }
  i856.lightmaps = i858
  i856.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i857[31], i856.lightProbes)
  i856.lightmapsMode = i857[32]
  i856.mixedBakeMode = i857[33]
  i856.environmentLightingMode = i857[34]
  i856.ambientProbe = new pc.SphericalHarmonicsL2(i857[35])
  i856.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i857[36])
  i856.useReferenceAmbientProbe = !!i857[37]
  request.r(i857[38], i857[39], 0, i856, 'customReflection')
  request.r(i857[40], i857[41], 0, i856, 'defaultReflection')
  i856.defaultReflectionMode = i857[42]
  i856.defaultReflectionResolution = i857[43]
  i856.sunLightObjectId = i857[44]
  i856.pixelLightCount = i857[45]
  i856.defaultReflectionHDR = !!i857[46]
  i856.hasLightDataAsset = !!i857[47]
  i856.hasManualGenerate = !!i857[48]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'lightmapColor')
  request.r(i863[2], i863[3], 0, i862, 'lightmapDirection')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i864 = root || new UnityEngine.LightProbes()
  var i865 = data
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i875[i + 0]));
  }
  i872.ShaderCompilationErrors = i874
  i872.name = i873[1]
  i872.guid = i873[2]
  var i877 = i873[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i872.shaderDefinedKeywords = i876
  var i879 = i873[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i879[i + 0]) );
  }
  i872.passes = i878
  var i881 = i873[5]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i881[i + 0]) );
  }
  i872.usePasses = i880
  var i883 = i873[6]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i883[i + 0]) );
  }
  i872.defaultParameterValues = i882
  request.r(i873[7], i873[8], 0, i872, 'unityFallbackShader')
  i872.readDepth = !!i873[9]
  i872.isCreatedByShaderGraph = !!i873[10]
  i872.compiled = !!i873[11]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i887 = data
  i886.shaderName = i887[0]
  i886.errorMessage = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i892 = root || new pc.UnityShaderPass()
  var i893 = data
  i892.id = i893[0]
  i892.subShaderIndex = i893[1]
  i892.name = i893[2]
  i892.passType = i893[3]
  i892.grabPassTextureName = i893[4]
  i892.usePass = !!i893[5]
  i892.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[6], i892.zTest)
  i892.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[7], i892.zWrite)
  i892.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[8], i892.culling)
  i892.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i893[9], i892.blending)
  i892.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i893[10], i892.alphaBlending)
  i892.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[11], i892.colorWriteMask)
  i892.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[12], i892.offsetUnits)
  i892.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[13], i892.offsetFactor)
  i892.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[14], i892.stencilRef)
  i892.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[15], i892.stencilReadMask)
  i892.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[16], i892.stencilWriteMask)
  i892.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i893[17], i892.stencilOp)
  i892.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i893[18], i892.stencilOpFront)
  i892.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i893[19], i892.stencilOpBack)
  var i895 = i893[20]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i895[i + 0]) );
  }
  i892.tags = i894
  var i897 = i893[21]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.passDefinedKeywords = i896
  var i899 = i893[22]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i899[i + 0]) );
  }
  i892.passDefinedKeywordGroups = i898
  var i901 = i893[23]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i901[i + 0]) );
  }
  i892.variants = i900
  var i903 = i893[24]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i903[i + 0]) );
  }
  i892.excludedVariants = i902
  i892.hasDepthReader = !!i893[25]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i905 = data
  i904.val = i905[0]
  i904.name = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i907 = data
  i906.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[0], i906.src)
  i906.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[1], i906.dst)
  i906.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[2], i906.op)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i909 = data
  i908.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i909[0], i908.pass)
  i908.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i909[1], i908.fail)
  i908.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i909[2], i908.zFail)
  i908.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i909[3], i908.comp)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i913 = data
  i912.name = i913[0]
  i912.value = i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i916.keywords = i918
  i916.hasDiscard = !!i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i923 = data
  i922.passId = i923[0]
  i922.subShaderIndex = i923[1]
  var i925 = i923[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i922.keywords = i924
  i922.vertexProgram = i923[3]
  i922.fragmentProgram = i923[4]
  i922.exportedForWebGl2 = !!i923[5]
  i922.readDepth = !!i923[6]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'shader')
  i928.pass = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i933 = data
  i932.name = i933[0]
  i932.type = i933[1]
  i932.value = new pc.Vec4( i933[2], i933[3], i933[4], i933[5] )
  i932.textureValue = i933[6]
  i932.shaderPropertyFlag = i933[7]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i935 = data
  i934.name = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'texture')
  i934.aabb = i935[3]
  i934.vertices = i935[4]
  i934.triangles = i935[5]
  i934.textureRect = UnityEngine.Rect.MinMaxRect(i935[6], i935[7], i935[8], i935[9])
  i934.packedRect = UnityEngine.Rect.MinMaxRect(i935[10], i935[11], i935[12], i935[13])
  i934.border = new pc.Vec4( i935[14], i935[15], i935[16], i935[17] )
  i934.transparency = i935[18]
  i934.bounds = i935[19]
  i934.pixelsPerUnit = i935[20]
  i934.textureWidth = i935[21]
  i934.textureHeight = i935[22]
  i934.nativeSize = new pc.Vec2( i935[23], i935[24] )
  i934.pivot = new pc.Vec2( i935[25], i935[26] )
  i934.textureRectOffset = new pc.Vec2( i935[27], i935[28] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i937 = data
  i936.name = i937[0]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i939 = data
  i938.name = i939[0]
  i938.wrapMode = i939[1]
  i938.isLooping = !!i939[2]
  i938.length = i939[3]
  var i941 = i939[4]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i941[i + 0]) );
  }
  i938.curves = i940
  var i943 = i939[5]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i943[i + 0]) );
  }
  i938.events = i942
  i938.halfPrecision = !!i939[6]
  i938._frameRate = i939[7]
  i938.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i939[8], i938.localBounds)
  i938.hasMuscleCurves = !!i939[9]
  var i945 = i939[10]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i938.clipMuscleConstant = i944
  i938.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i939[11], i938.clipBindingConstant)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i949 = data
  i948.path = i949[0]
  i948.hash = i949[1]
  i948.componentType = i949[2]
  i948.property = i949[3]
  i948.keys = i949[4]
  var i951 = i949[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i951[i + 0]) );
  }
  i948.objectReferenceKeys = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i955 = data
  i954.time = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'value')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i959 = data
  i958.functionName = i959[0]
  i958.floatParameter = i959[1]
  i958.intParameter = i959[2]
  i958.stringParameter = i959[3]
  request.r(i959[4], i959[5], 0, i958, 'objectReferenceParameter')
  i958.time = i959[6]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i961 = data
  i960.center = new pc.Vec3( i961[0], i961[1], i961[2] )
  i960.extends = new pc.Vec3( i961[3], i961[4], i961[5] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i964.genericBindings = i966
  var i969 = i965[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.pptrCurveMapping = i968
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i971 = data
  i970.name = i971[0]
  i970.ascent = i971[1]
  i970.originalLineHeight = i971[2]
  i970.fontSize = i971[3]
  var i973 = i971[4]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i973[i + 0]) );
  }
  i970.characterInfo = i972
  request.r(i971[5], i971[6], 0, i970, 'texture')
  i970.originalFontSize = i971[7]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i977 = data
  i976.index = i977[0]
  i976.advance = i977[1]
  i976.bearing = i977[2]
  i976.glyphWidth = i977[3]
  i976.glyphHeight = i977[4]
  i976.minX = i977[5]
  i976.maxX = i977[6]
  i976.minY = i977[7]
  i976.maxY = i977[8]
  i976.uvBottomLeftX = i977[9]
  i976.uvBottomLeftY = i977[10]
  i976.uvBottomRightX = i977[11]
  i976.uvBottomRightY = i977[12]
  i976.uvTopLeftX = i977[13]
  i976.uvTopLeftY = i977[14]
  i976.uvTopRightX = i977[15]
  i976.uvTopRightY = i977[16]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i979 = data
  i978.name = i979[0]
  var i981 = i979[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i981[i + 0]) );
  }
  i978.layers = i980
  var i983 = i979[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i983[i + 0]) );
  }
  i978.parameters = i982
  i978.animationClips = i979[3]
  i978.avatarUnsupported = i979[4]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i987 = data
  i986.name = i987[0]
  i986.defaultWeight = i987[1]
  i986.blendingMode = i987[2]
  i986.avatarMask = i987[3]
  i986.syncedLayerIndex = i987[4]
  i986.syncedLayerAffectsTiming = !!i987[5]
  i986.syncedLayers = i987[6]
  i986.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i987[7], i986.stateMachine)
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i989 = data
  i988.id = i989[0]
  i988.name = i989[1]
  i988.path = i989[2]
  var i991 = i989[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i991[i + 0]) );
  }
  i988.states = i990
  var i993 = i989[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i993[i + 0]) );
  }
  i988.machines = i992
  var i995 = i989[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i995[i + 0]) );
  }
  i988.entryStateTransitions = i994
  var i997 = i989[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i997[i + 0]) );
  }
  i988.exitStateTransitions = i996
  var i999 = i989[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i999[i + 0]) );
  }
  i988.anyStateTransitions = i998
  i988.defaultStateId = i989[8]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.cycleOffset = i1003[2]
  i1002.cycleOffsetParameter = i1003[3]
  i1002.cycleOffsetParameterActive = !!i1003[4]
  i1002.mirror = !!i1003[5]
  i1002.mirrorParameter = i1003[6]
  i1002.mirrorParameterActive = !!i1003[7]
  i1002.motionId = i1003[8]
  i1002.nameHash = i1003[9]
  i1002.fullPathHash = i1003[10]
  i1002.speed = i1003[11]
  i1002.speedParameter = i1003[12]
  i1002.speedParameterActive = !!i1003[13]
  i1002.tag = i1003[14]
  i1002.tagHash = i1003[15]
  i1002.writeDefaultValues = !!i1003[16]
  var i1005 = i1003[17]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.behaviours = i1004
  var i1007 = i1003[18]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1007[i + 0]) );
  }
  i1002.transitions = i1006
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1013 = data
  i1012.fullPath = i1013[0]
  i1012.canTransitionToSelf = !!i1013[1]
  i1012.duration = i1013[2]
  i1012.exitTime = i1013[3]
  i1012.hasExitTime = !!i1013[4]
  i1012.hasFixedDuration = !!i1013[5]
  i1012.interruptionSource = i1013[6]
  i1012.offset = i1013[7]
  i1012.orderedInterruption = !!i1013[8]
  i1012.destinationStateId = i1013[9]
  i1012.isExit = !!i1013[10]
  i1012.mute = !!i1013[11]
  i1012.solo = !!i1013[12]
  var i1015 = i1013[13]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1015[i + 0]) );
  }
  i1012.conditions = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1021 = data
  i1020.destinationStateId = i1021[0]
  i1020.isExit = !!i1021[1]
  i1020.mute = !!i1021[2]
  i1020.solo = !!i1021[3]
  var i1023 = i1021[4]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1023[i + 0]) );
  }
  i1020.conditions = i1022
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1027 = data
  i1026.defaultBool = !!i1027[0]
  i1026.defaultFloat = i1027[1]
  i1026.defaultInt = i1027[2]
  i1026.name = i1027[3]
  i1026.nameHash = i1027[4]
  i1026.type = i1027[5]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1031 = data
  i1030.mode = i1031[0]
  i1030.parameter = i1031[1]
  i1030.threshold = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.bytes64 = i1033[1]
  i1032.data = i1033[2]
  return i1032
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1035 = data
  i1034.hashCode = i1035[0]
  request.r(i1035[1], i1035[2], 0, i1034, 'material')
  i1034.materialHashCode = i1035[3]
  request.r(i1035[4], i1035[5], 0, i1034, 'atlas')
  i1034.normalStyle = i1035[6]
  i1034.normalSpacingOffset = i1035[7]
  i1034.boldStyle = i1035[8]
  i1034.boldSpacing = i1035[9]
  i1034.italicStyle = i1035[10]
  i1034.tabSize = i1035[11]
  i1034.m_Version = i1035[12]
  i1034.m_SourceFontFileGUID = i1035[13]
  request.r(i1035[14], i1035[15], 0, i1034, 'm_SourceFontFile_EditorRef')
  request.r(i1035[16], i1035[17], 0, i1034, 'm_SourceFontFile')
  i1034.m_AtlasPopulationMode = i1035[18]
  i1034.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1035[19], i1034.m_FaceInfo)
  var i1037 = i1035[20]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('UnityEngine.TextCore.Glyph', i1037[i + 0]));
  }
  i1034.m_GlyphTable = i1036
  var i1039 = i1035[21]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('TMPro.TMP_Character', i1039[i + 0]));
  }
  i1034.m_CharacterTable = i1038
  var i1041 = i1035[22]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1034.m_AtlasTextures = i1040
  i1034.m_AtlasTextureIndex = i1035[23]
  i1034.m_IsMultiAtlasTexturesEnabled = !!i1035[24]
  i1034.m_ClearDynamicDataOnBuild = !!i1035[25]
  var i1043 = i1035[26]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('UnityEngine.TextCore.GlyphRect', i1043[i + 0]));
  }
  i1034.m_UsedGlyphRects = i1042
  var i1045 = i1035[27]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('UnityEngine.TextCore.GlyphRect', i1045[i + 0]));
  }
  i1034.m_FreeGlyphRects = i1044
  i1034.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1035[28], i1034.m_fontInfo)
  i1034.m_AtlasWidth = i1035[29]
  i1034.m_AtlasHeight = i1035[30]
  i1034.m_AtlasPadding = i1035[31]
  i1034.m_AtlasRenderMode = i1035[32]
  var i1047 = i1035[33]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Glyph', i1047[i + 0]));
  }
  i1034.m_glyphInfoList = i1046
  i1034.m_KerningTable = request.d('TMPro.KerningTable', i1035[34], i1034.m_KerningTable)
  i1034.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1035[35], i1034.m_FontFeatureTable)
  var i1049 = i1035[36]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1034.fallbackFontAssets = i1048
  var i1051 = i1035[37]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1034.m_FallbackFontAssetTable = i1050
  i1034.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1035[38], i1034.m_CreationSettings)
  var i1053 = i1035[39]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('TMPro.TMP_FontWeightPair', i1053[i + 0]) );
  }
  i1034.m_FontWeightTable = i1052
  var i1055 = i1035[40]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('TMPro.TMP_FontWeightPair', i1055[i + 0]) );
  }
  i1034.fontWeights = i1054
  return i1034
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1057 = data
  i1056.m_FaceIndex = i1057[0]
  i1056.m_FamilyName = i1057[1]
  i1056.m_StyleName = i1057[2]
  i1056.m_PointSize = i1057[3]
  i1056.m_Scale = i1057[4]
  i1056.m_UnitsPerEM = i1057[5]
  i1056.m_LineHeight = i1057[6]
  i1056.m_AscentLine = i1057[7]
  i1056.m_CapLine = i1057[8]
  i1056.m_MeanLine = i1057[9]
  i1056.m_Baseline = i1057[10]
  i1056.m_DescentLine = i1057[11]
  i1056.m_SuperscriptOffset = i1057[12]
  i1056.m_SuperscriptSize = i1057[13]
  i1056.m_SubscriptOffset = i1057[14]
  i1056.m_SubscriptSize = i1057[15]
  i1056.m_UnderlineOffset = i1057[16]
  i1056.m_UnderlineThickness = i1057[17]
  i1056.m_StrikethroughOffset = i1057[18]
  i1056.m_StrikethroughThickness = i1057[19]
  i1056.m_TabWidth = i1057[20]
  return i1056
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1061 = data
  i1060.m_Index = i1061[0]
  i1060.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1061[1], i1060.m_Metrics)
  i1060.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1061[2], i1060.m_GlyphRect)
  i1060.m_Scale = i1061[3]
  i1060.m_AtlasIndex = i1061[4]
  i1060.m_ClassDefinitionType = i1061[5]
  return i1060
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1063 = data
  i1062.m_Width = i1063[0]
  i1062.m_Height = i1063[1]
  i1062.m_HorizontalBearingX = i1063[2]
  i1062.m_HorizontalBearingY = i1063[3]
  i1062.m_HorizontalAdvance = i1063[4]
  return i1062
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1065 = data
  i1064.m_X = i1065[0]
  i1064.m_Y = i1065[1]
  i1064.m_Width = i1065[2]
  i1064.m_Height = i1065[3]
  return i1064
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_Character' )
  var i1069 = data
  i1068.m_ElementType = i1069[0]
  i1068.m_Unicode = i1069[1]
  i1068.m_GlyphIndex = i1069[2]
  i1068.m_Scale = i1069[3]
  return i1068
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1075 = data
  i1074.Name = i1075[0]
  i1074.PointSize = i1075[1]
  i1074.Scale = i1075[2]
  i1074.CharacterCount = i1075[3]
  i1074.LineHeight = i1075[4]
  i1074.Baseline = i1075[5]
  i1074.Ascender = i1075[6]
  i1074.CapHeight = i1075[7]
  i1074.Descender = i1075[8]
  i1074.CenterLine = i1075[9]
  i1074.SuperscriptOffset = i1075[10]
  i1074.SubscriptOffset = i1075[11]
  i1074.SubSize = i1075[12]
  i1074.Underline = i1075[13]
  i1074.UnderlineThickness = i1075[14]
  i1074.strikethrough = i1075[15]
  i1074.strikethroughThickness = i1075[16]
  i1074.TabWidth = i1075[17]
  i1074.Padding = i1075[18]
  i1074.AtlasWidth = i1075[19]
  i1074.AtlasHeight = i1075[20]
  return i1074
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.x = i1079[1]
  i1078.y = i1079[2]
  i1078.width = i1079[3]
  i1078.height = i1079[4]
  i1078.xOffset = i1079[5]
  i1078.yOffset = i1079[6]
  i1078.xAdvance = i1079[7]
  i1078.scale = i1079[8]
  return i1078
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.KerningTable' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.KerningPair', i1083[i + 0]));
  }
  i1080.kerningPairs = i1082
  return i1080
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.KerningPair' )
  var i1087 = data
  i1086.xOffset = i1087[0]
  i1086.m_FirstGlyph = i1087[1]
  i1086.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1087[2], i1086.m_FirstGlyphAdjustments)
  i1086.m_SecondGlyph = i1087[3]
  i1086.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1087[4], i1086.m_SecondGlyphAdjustments)
  i1086.m_IgnoreSpacingAdjustments = !!i1087[5]
  return i1086
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1091[i + 0]));
  }
  i1088.m_GlyphPairAdjustmentRecords = i1090
  return i1088
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1095 = data
  i1094.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1095[0], i1094.m_FirstAdjustmentRecord)
  i1094.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1095[1], i1094.m_SecondAdjustmentRecord)
  i1094.m_FeatureLookupFlags = i1095[2]
  return i1094
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1097 = data
  i1096.m_GlyphIndex = i1097[0]
  i1096.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1097[1], i1096.m_GlyphValueRecord)
  return i1096
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1099 = data
  i1098.m_XPlacement = i1099[0]
  i1098.m_YPlacement = i1099[1]
  i1098.m_XAdvance = i1099[2]
  i1098.m_YAdvance = i1099[3]
  return i1098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1103 = data
  i1102.sourceFontFileName = i1103[0]
  i1102.sourceFontFileGUID = i1103[1]
  i1102.pointSizeSamplingMode = i1103[2]
  i1102.pointSize = i1103[3]
  i1102.padding = i1103[4]
  i1102.packingMode = i1103[5]
  i1102.atlasWidth = i1103[6]
  i1102.atlasHeight = i1103[7]
  i1102.characterSetSelectionMode = i1103[8]
  i1102.characterSequence = i1103[9]
  i1102.referencedFontAssetGUID = i1103[10]
  i1102.referencedTextAssetGUID = i1103[11]
  i1102.fontStyle = i1103[12]
  i1102.fontStyleModifier = i1103[13]
  i1102.renderMode = i1103[14]
  i1102.includeFontFeatures = !!i1103[15]
  return i1102
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'regularTypeface')
  request.r(i1107[2], i1107[3], 0, i1106, 'italicTypeface')
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1109 = data
  i1108.useSafeMode = !!i1109[0]
  i1108.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1109[1], i1108.safeModeOptions)
  i1108.timeScale = i1109[2]
  i1108.unscaledTimeScale = i1109[3]
  i1108.useSmoothDeltaTime = !!i1109[4]
  i1108.maxSmoothUnscaledTime = i1109[5]
  i1108.rewindCallbackMode = i1109[6]
  i1108.showUnityEditorReport = !!i1109[7]
  i1108.logBehaviour = i1109[8]
  i1108.drawGizmos = !!i1109[9]
  i1108.defaultRecyclable = !!i1109[10]
  i1108.defaultAutoPlay = i1109[11]
  i1108.defaultUpdateType = i1109[12]
  i1108.defaultTimeScaleIndependent = !!i1109[13]
  i1108.defaultEaseType = i1109[14]
  i1108.defaultEaseOvershootOrAmplitude = i1109[15]
  i1108.defaultEasePeriod = i1109[16]
  i1108.defaultAutoKill = !!i1109[17]
  i1108.defaultLoopType = i1109[18]
  i1108.debugMode = !!i1109[19]
  i1108.debugStoreTargetId = !!i1109[20]
  i1108.showPreviewPanel = !!i1109[21]
  i1108.storeSettingsLocation = i1109[22]
  i1108.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1109[23], i1108.modules)
  i1108.createASMDEF = !!i1109[24]
  i1108.showPlayingTweens = !!i1109[25]
  i1108.showPausedTweens = !!i1109[26]
  return i1108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1111 = data
  i1110.logBehaviour = i1111[0]
  i1110.nestedTweenFailureBehaviour = i1111[1]
  return i1110
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1113 = data
  i1112.showPanel = !!i1113[0]
  i1112.audioEnabled = !!i1113[1]
  i1112.physicsEnabled = !!i1113[2]
  i1112.physics2DEnabled = !!i1113[3]
  i1112.spriteEnabled = !!i1113[4]
  i1112.uiEnabled = !!i1113[5]
  i1112.textMeshProEnabled = !!i1113[6]
  i1112.tk2DEnabled = !!i1113[7]
  i1112.deAudioEnabled = !!i1113[8]
  i1112.deUnityExtendedEnabled = !!i1113[9]
  i1112.epoOutlineEnabled = !!i1113[10]
  return i1112
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_Settings' )
  var i1115 = data
  i1114.m_enableWordWrapping = !!i1115[0]
  i1114.m_enableKerning = !!i1115[1]
  i1114.m_enableExtraPadding = !!i1115[2]
  i1114.m_enableTintAllSprites = !!i1115[3]
  i1114.m_enableParseEscapeCharacters = !!i1115[4]
  i1114.m_EnableRaycastTarget = !!i1115[5]
  i1114.m_GetFontFeaturesAtRuntime = !!i1115[6]
  i1114.m_missingGlyphCharacter = i1115[7]
  i1114.m_warningsDisabled = !!i1115[8]
  request.r(i1115[9], i1115[10], 0, i1114, 'm_defaultFontAsset')
  i1114.m_defaultFontAssetPath = i1115[11]
  i1114.m_defaultFontSize = i1115[12]
  i1114.m_defaultAutoSizeMinRatio = i1115[13]
  i1114.m_defaultAutoSizeMaxRatio = i1115[14]
  i1114.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1115[15], i1115[16] )
  i1114.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1115[17], i1115[18] )
  i1114.m_autoSizeTextContainer = !!i1115[19]
  i1114.m_IsTextObjectScaleStatic = !!i1115[20]
  var i1117 = i1115[21]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1114.m_fallbackFontAssets = i1116
  i1114.m_matchMaterialPreset = !!i1115[22]
  request.r(i1115[23], i1115[24], 0, i1114, 'm_defaultSpriteAsset')
  i1114.m_defaultSpriteAssetPath = i1115[25]
  i1114.m_enableEmojiSupport = !!i1115[26]
  i1114.m_MissingCharacterSpriteUnicode = i1115[27]
  i1114.m_defaultColorGradientPresetsPath = i1115[28]
  request.r(i1115[29], i1115[30], 0, i1114, 'm_defaultStyleSheet')
  i1114.m_StyleSheetsResourcePath = i1115[31]
  request.r(i1115[32], i1115[33], 0, i1114, 'm_leadingCharacters')
  request.r(i1115[34], i1115[35], 0, i1114, 'm_followingCharacters')
  i1114.m_UseModernHangulLineBreakingRules = !!i1115[36]
  return i1114
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1119 = data
  i1118.hashCode = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'material')
  i1118.materialHashCode = i1119[3]
  request.r(i1119[4], i1119[5], 0, i1118, 'spriteSheet')
  var i1121 = i1119[6]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Sprite', i1121[i + 0]));
  }
  i1118.spriteInfoList = i1120
  var i1123 = i1119[7]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1118.fallbackSpriteAssets = i1122
  i1118.m_Version = i1119[8]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[9], i1118.m_FaceInfo)
  var i1125 = i1119[10]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_SpriteCharacter', i1125[i + 0]));
  }
  i1118.m_SpriteCharacterTable = i1124
  var i1127 = i1119[11]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_SpriteGlyph', i1127[i + 0]));
  }
  i1118.m_SpriteGlyphTable = i1126
  return i1118
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.hashCode = i1131[1]
  i1130.unicode = i1131[2]
  i1130.pivot = new pc.Vec2( i1131[3], i1131[4] )
  request.r(i1131[5], i1131[6], 0, i1130, 'sprite')
  i1130.id = i1131[7]
  i1130.x = i1131[8]
  i1130.y = i1131[9]
  i1130.width = i1131[10]
  i1130.height = i1131[11]
  i1130.xOffset = i1131[12]
  i1130.yOffset = i1131[13]
  i1130.xAdvance = i1131[14]
  i1130.scale = i1131[15]
  return i1130
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1137 = data
  i1136.m_Name = i1137[0]
  i1136.m_HashCode = i1137[1]
  i1136.m_ElementType = i1137[2]
  i1136.m_Unicode = i1137[3]
  i1136.m_GlyphIndex = i1137[4]
  i1136.m_Scale = i1137[5]
  return i1136
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'sprite')
  i1140.m_Index = i1141[2]
  i1140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1141[3], i1140.m_Metrics)
  i1140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1141[4], i1140.m_GlyphRect)
  i1140.m_Scale = i1141[5]
  i1140.m_AtlasIndex = i1141[6]
  i1140.m_ClassDefinitionType = i1141[7]
  return i1140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Style', i1145[i + 0]));
  }
  i1142.m_StyleList = i1144
  return i1142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Style' )
  var i1149 = data
  i1148.m_Name = i1149[0]
  i1148.m_HashCode = i1149[1]
  i1148.m_OpeningDefinition = i1149[2]
  i1148.m_ClosingDefinition = i1149[3]
  i1148.m_OpeningTagArray = i1149[4]
  i1148.m_ClosingTagArray = i1149[5]
  i1148.m_OpeningTagUnicodeArray = i1149[6]
  i1148.m_ClosingTagUnicodeArray = i1149[7]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1153[i + 0]) );
  }
  i1150.files = i1152
  i1150.componentToPrefabIds = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1157 = data
  i1156.path = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'unityObject')
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1161[i + 0]) );
  }
  i1158.scriptsExecutionOrder = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1163[i + 0]) );
  }
  i1158.sortingLayers = i1162
  var i1165 = i1159[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1165[i + 0]) );
  }
  i1158.cullingLayers = i1164
  i1158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1159[3], i1158.timeSettings)
  i1158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1159[4], i1158.physicsSettings)
  i1158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1159[5], i1158.physics2DSettings)
  i1158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1159[6], i1158.qualitySettings)
  i1158.enableRealtimeShadows = !!i1159[7]
  i1158.enableAutoInstancing = !!i1159[8]
  i1158.enableDynamicBatching = !!i1159[9]
  i1158.lightmapEncodingQuality = i1159[10]
  i1158.desiredColorSpace = i1159[11]
  var i1167 = i1159[12]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1158.allTags = i1166
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  i1174.value = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1181 = data
  i1180.fixedDeltaTime = i1181[0]
  i1180.maximumDeltaTime = i1181[1]
  i1180.timeScale = i1181[2]
  i1180.maximumParticleTimestep = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1183 = data
  i1182.gravity = new pc.Vec3( i1183[0], i1183[1], i1183[2] )
  i1182.defaultSolverIterations = i1183[3]
  i1182.bounceThreshold = i1183[4]
  i1182.autoSyncTransforms = !!i1183[5]
  i1182.autoSimulation = !!i1183[6]
  var i1185 = i1183[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1185[i + 0]) );
  }
  i1182.collisionMatrix = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1189 = data
  i1188.enabled = !!i1189[0]
  i1188.layerId = i1189[1]
  i1188.otherLayerId = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'material')
  i1190.gravity = new pc.Vec2( i1191[2], i1191[3] )
  i1190.positionIterations = i1191[4]
  i1190.velocityIterations = i1191[5]
  i1190.velocityThreshold = i1191[6]
  i1190.maxLinearCorrection = i1191[7]
  i1190.maxAngularCorrection = i1191[8]
  i1190.maxTranslationSpeed = i1191[9]
  i1190.maxRotationSpeed = i1191[10]
  i1190.baumgarteScale = i1191[11]
  i1190.baumgarteTOIScale = i1191[12]
  i1190.timeToSleep = i1191[13]
  i1190.linearSleepTolerance = i1191[14]
  i1190.angularSleepTolerance = i1191[15]
  i1190.defaultContactOffset = i1191[16]
  i1190.autoSimulation = !!i1191[17]
  i1190.queriesHitTriggers = !!i1191[18]
  i1190.queriesStartInColliders = !!i1191[19]
  i1190.callbacksOnDisable = !!i1191[20]
  i1190.reuseCollisionCallbacks = !!i1191[21]
  i1190.autoSyncTransforms = !!i1191[22]
  var i1193 = i1191[23]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1201[i + 0]) );
  }
  i1198.qualityLevels = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.names = i1202
  i1198.shadows = i1199[2]
  i1198.anisotropicFiltering = i1199[3]
  i1198.antiAliasing = i1199[4]
  i1198.lodBias = i1199[5]
  i1198.shadowCascades = i1199[6]
  i1198.shadowDistance = i1199[7]
  i1198.shadowmaskMode = i1199[8]
  i1198.shadowProjection = i1199[9]
  i1198.shadowResolution = i1199[10]
  i1198.softParticles = !!i1199[11]
  i1198.softVegetation = !!i1199[12]
  i1198.activeColorSpace = i1199[13]
  i1198.desiredColorSpace = i1199[14]
  i1198.masterTextureLimit = i1199[15]
  i1198.maxQueuedFrames = i1199[16]
  i1198.particleRaycastBudget = i1199[17]
  i1198.pixelLightCount = i1199[18]
  i1198.realtimeReflectionProbes = !!i1199[19]
  i1198.shadowCascade2Split = i1199[20]
  i1198.shadowCascade4Split = new pc.Vec3( i1199[21], i1199[22], i1199[23] )
  i1198.streamingMipmapsActive = !!i1199[24]
  i1198.vSyncCount = i1199[25]
  i1198.asyncUploadBufferSize = i1199[26]
  i1198.asyncUploadTimeSlice = i1199[27]
  i1198.billboardsFaceCameraPosition = !!i1199[28]
  i1198.shadowNearPlaneOffset = i1199[29]
  i1198.streamingMipmapsMemoryBudget = i1199[30]
  i1198.maximumLODLevel = i1199[31]
  i1198.streamingMipmapsAddAllCameras = !!i1199[32]
  i1198.streamingMipmapsMaxLevelReduction = i1199[33]
  i1198.streamingMipmapsRenderersPerFrame = i1199[34]
  i1198.resolutionScalingFixedDPIFactor = i1199[35]
  i1198.streamingMipmapsMaxFileIORequests = i1199[36]
  i1198.currentQualityLevel = i1199[37]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1209 = data
  i1208.weight = i1209[0]
  i1208.vertices = i1209[1]
  i1208.normals = i1209[2]
  i1208.tangents = i1209[3]
  return i1208
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1211 = data
  i1210.xPlacement = i1211[0]
  i1210.yPlacement = i1211[1]
  i1210.xAdvance = i1211[2]
  i1210.yAdvance = i1211[3]
  return i1210
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[9],"72":[22],"73":[28],"74":[28],"75":[28],"76":[28],"77":[28],"78":[28],"79":[28],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[22],"95":[5],"96":[97],"98":[97],"13":[12],"24":[22],"99":[100],"101":[12],"102":[12],"16":[13],"20":[19,12],"103":[12],"15":[13],"104":[12],"105":[12],"106":[12],"107":[12],"108":[12],"109":[12],"110":[12],"111":[12],"112":[12],"113":[19,12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[19,12],"119":[12],"120":[29],"121":[29],"30":[29],"122":[29],"123":[22],"124":[22],"125":[100],"126":[12],"127":[5,12],"44":[12,19],"128":[12],"129":[19,12],"130":[5],"131":[19,12],"132":[12],"133":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Tree","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","Wall","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","AdaptiveCameraPosition","UnityEngine.Light","Conveyor","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BuildManager","UnityEngine.UI.Button","UnityEngine.GameObject","MoneyController","CharactersMover","SimplePoint","LoadPoint","UnloadPoint","Forklift","Garage","ChopperManager","Chopper","ButtonLight","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Build","Truck","MoneyBalance","MoneyFlyAnimation","ClickCta","TruckManager","TruckUnloadPoint","TruckMover","GameManager","SimpleAudioManager","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "14.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1724";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4465";

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

Deserializers.buildID = "cbb8bbb8-d578-4a10-bc2e-ac2bce223b83";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

