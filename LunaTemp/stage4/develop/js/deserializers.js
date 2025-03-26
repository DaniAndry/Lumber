var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointSpring' )
  var i605 = data
  i604.spring = i605[0]
  i604.damper = i605[1]
  i604.targetPosition = i605[2]
  return i604
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointMotor' )
  var i607 = data
  i606.m_TargetVelocity = i607[0]
  i606.m_Force = i607[1]
  i606.m_FreeSpin = i607[2]
  return i606
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointLimits' )
  var i609 = data
  i608.m_Min = i609[0]
  i608.m_Max = i609[1]
  i608.m_Bounciness = i609[2]
  i608.m_BounceMinVelocity = i609[3]
  i608.m_ContactDistance = i609[4]
  i608.minBounce = i609[5]
  i608.maxBounce = i609[6]
  return i608
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointDrive' )
  var i611 = data
  i610.m_PositionSpring = i611[0]
  i610.m_PositionDamper = i611[1]
  i610.m_MaximumForce = i611[2]
  i610.m_UseAcceleration = i611[3]
  return i610
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i613 = data
  i612.m_Spring = i613[0]
  i612.m_Damper = i613[1]
  return i612
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i615 = data
  i614.m_Limit = i615[0]
  i614.m_Bounciness = i615[1]
  i614.m_ContactDistance = i615[2]
  return i614
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i617 = data
  i616.m_ExtremumSlip = i617[0]
  i616.m_ExtremumValue = i617[1]
  i616.m_AsymptoteSlip = i617[2]
  i616.m_AsymptoteValue = i617[3]
  i616.m_Stiffness = i617[4]
  return i616
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i619 = data
  i618.m_LowerAngle = i619[0]
  i618.m_UpperAngle = i619[1]
  return i618
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i621 = data
  i620.m_MotorSpeed = i621[0]
  i620.m_MaximumMotorTorque = i621[1]
  return i620
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i623 = data
  i622.m_DampingRatio = i623[0]
  i622.m_Frequency = i623[1]
  i622.m_Angle = i623[2]
  return i622
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i625 = data
  i624.m_LowerTranslation = i625[0]
  i624.m_UpperTranslation = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i627 = data
  i626.name = i627[0]
  i626.width = i627[1]
  i626.height = i627[2]
  i626.mipmapCount = i627[3]
  i626.anisoLevel = i627[4]
  i626.filterMode = i627[5]
  i626.hdr = !!i627[6]
  i626.format = i627[7]
  i626.wrapMode = i627[8]
  i626.alphaIsTransparency = !!i627[9]
  i626.alphaSource = i627[10]
  i626.graphicsFormat = i627[11]
  i626.sRGBTexture = !!i627[12]
  i626.desiredColorSpace = i627[13]
  i626.wrapU = i627[14]
  i626.wrapV = i627[15]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i629 = data
  i628.name = i629[0]
  i628.halfPrecision = !!i629[1]
  i628.useUInt32IndexFormat = !!i629[2]
  i628.vertexCount = i629[3]
  i628.aabb = i629[4]
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( !!i631[i + 0] );
  }
  i628.streams = i630
  i628.vertices = i629[6]
  var i633 = i629[7]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i633[i + 0]) );
  }
  i628.subMeshes = i632
  var i635 = i629[8]
  var i634 = []
  for(var i = 0; i < i635.length; i += 16) {
    i634.push( new pc.Mat4().setData(i635[i + 0], i635[i + 1], i635[i + 2], i635[i + 3],  i635[i + 4], i635[i + 5], i635[i + 6], i635[i + 7],  i635[i + 8], i635[i + 9], i635[i + 10], i635[i + 11],  i635[i + 12], i635[i + 13], i635[i + 14], i635[i + 15]) );
  }
  i628.bindposes = i634
  var i637 = i629[9]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i637[i + 0]) );
  }
  i628.blendShapes = i636
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i643 = data
  i642.triangles = i643[0]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i649 = data
  i648.name = i649[0]
  var i651 = i649[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i651[i + 0]) );
  }
  i648.frames = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i652 = root || new pc.UnityMaterial()
  var i653 = data
  i652.name = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'shader')
  i652.renderQueue = i653[3]
  i652.enableInstancing = !!i653[4]
  var i655 = i653[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i655[i + 0]) );
  }
  i652.floatParameters = i654
  var i657 = i653[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i657[i + 0]) );
  }
  i652.colorParameters = i656
  var i659 = i653[7]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i659[i + 0]) );
  }
  i652.vectorParameters = i658
  var i661 = i653[8]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i661[i + 0]) );
  }
  i652.textureParameters = i660
  var i663 = i653[9]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i663[i + 0]) );
  }
  i652.materialFlags = i662
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i667 = data
  i666.name = i667[0]
  i666.value = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = new pc.Color(i671[1], i671[2], i671[3], i671[4])
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Vec4( i675[1], i675[2], i675[3], i675[4] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i679 = data
  i678.name = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'value')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i683 = data
  i682.name = i683[0]
  i682.enabled = !!i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i685 = data
  i684.position = new pc.Vec3( i685[0], i685[1], i685[2] )
  i684.scale = new pc.Vec3( i685[3], i685[4], i685[5] )
  i684.rotation = new pc.Quat(i685[6], i685[7], i685[8], i685[9])
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'sharedMesh')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'additionalVertexStreams')
  i688.enabled = !!i689[2]
  request.r(i689[3], i689[4], 0, i688, 'sharedMaterial')
  var i691 = i689[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sharedMaterials = i690
  i688.receiveShadows = !!i689[6]
  i688.shadowCastingMode = i689[7]
  i688.sortingLayerID = i689[8]
  i688.sortingOrder = i689[9]
  i688.lightmapIndex = i689[10]
  i688.lightmapSceneIndex = i689[11]
  i688.lightmapScaleOffset = new pc.Vec4( i689[12], i689[13], i689[14], i689[15] )
  i688.lightProbeUsage = i689[16]
  i688.reflectionProbeUsage = i689[17]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i695 = data
  i694.name = i695[0]
  i694.tagId = i695[1]
  i694.enabled = !!i695[2]
  i694.isStatic = !!i695[3]
  i694.layer = i695[4]
  return i694
}

Deserializers["Tree"] = function (request, data, root) {
  var i696 = root || request.c( 'Tree' )
  var i697 = data
  i696.flashSpeed = i697[0]
  i696.pauseBetweenFlashes = i697[1]
  i696.flashCount = i697[2]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i699 = data
  i698.enabled = !!i699[0]
  request.r(i699[1], i699[2], 0, i698, 'sharedMaterial')
  var i701 = i699[3]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[4]
  i698.shadowCastingMode = i699[5]
  i698.sortingLayerID = i699[6]
  i698.sortingOrder = i699[7]
  i698.lightmapIndex = i699[8]
  i698.lightmapSceneIndex = i699[9]
  i698.lightmapScaleOffset = new pc.Vec4( i699[10], i699[11], i699[12], i699[13] )
  i698.lightProbeUsage = i699[14]
  i698.reflectionProbeUsage = i699[15]
  request.r(i699[16], i699[17], 0, i698, 'sharedMesh')
  var i703 = i699[18]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i698.bones = i702
  i698.updateWhenOffscreen = !!i699[19]
  i698.localBounds = i699[20]
  request.r(i699[21], i699[22], 0, i698, 'rootBone')
  var i705 = i699[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i705[i + 0]) );
  }
  i698.blendShapesWeights = i704
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i711 = data
  i710.weight = i711[0]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i713 = data
  i712.center = new pc.Vec3( i713[0], i713[1], i713[2] )
  i712.size = new pc.Vec3( i713[3], i713[4], i713[5] )
  i712.enabled = !!i713[6]
  i712.isTrigger = !!i713[7]
  request.r(i713[8], i713[9], 0, i712, 'material')
  return i712
}

Deserializers["Wall"] = function (request, data, root) {
  var i714 = root || request.c( 'Wall' )
  var i715 = data
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i717 = data
  i716.name = i717[0]
  i716.atlasId = i717[1]
  i716.mipmapCount = i717[2]
  i716.hdr = !!i717[3]
  i716.size = i717[4]
  i716.anisoLevel = i717[5]
  i716.filterMode = i717[6]
  var i719 = i717[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 4) {
    i718.push( UnityEngine.Rect.MinMaxRect(i719[i + 0], i719[i + 1], i719[i + 2], i719[i + 3]) );
  }
  i716.rects = i718
  i716.wrapU = i717[8]
  i716.wrapV = i717[9]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i723 = data
  i722.name = i723[0]
  i722.index = i723[1]
  i722.startup = !!i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i725 = data
  i724.pivot = new pc.Vec2( i725[0], i725[1] )
  i724.anchorMin = new pc.Vec2( i725[2], i725[3] )
  i724.anchorMax = new pc.Vec2( i725[4], i725[5] )
  i724.sizeDelta = new pc.Vec2( i725[6], i725[7] )
  i724.anchoredPosition3D = new pc.Vec3( i725[8], i725[9], i725[10] )
  i724.rotation = new pc.Quat(i725[11], i725[12], i725[13], i725[14])
  i724.scale = new pc.Vec3( i725[15], i725[16], i725[17] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.planeDistance = i727[1]
  i726.referencePixelsPerUnit = i727[2]
  i726.isFallbackOverlay = !!i727[3]
  i726.renderMode = i727[4]
  i726.renderOrder = i727[5]
  i726.sortingLayerName = i727[6]
  i726.sortingOrder = i727[7]
  i726.scaleFactor = i727[8]
  request.r(i727[9], i727[10], 0, i726, 'worldCamera')
  i726.overrideSorting = !!i727[11]
  i726.pixelPerfect = !!i727[12]
  i726.targetDisplay = i727[13]
  i726.overridePixelPerfect = !!i727[14]
  return i726
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i729 = data
  i728.m_UiScaleMode = i729[0]
  i728.m_ReferencePixelsPerUnit = i729[1]
  i728.m_ScaleFactor = i729[2]
  i728.m_ReferenceResolution = new pc.Vec2( i729[3], i729[4] )
  i728.m_ScreenMatchMode = i729[5]
  i728.m_MatchWidthOrHeight = i729[6]
  i728.m_PhysicalUnit = i729[7]
  i728.m_FallbackScreenDPI = i729[8]
  i728.m_DefaultSpriteDPI = i729[9]
  i728.m_DynamicPixelsPerUnit = i729[10]
  i728.m_PresetInfoIsWorld = !!i729[11]
  return i728
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i731 = data
  i730.m_IgnoreReversedGraphics = !!i731[0]
  i730.m_BlockingObjects = i731[1]
  i730.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i731[2] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'animatorController')
  request.r(i733[2], i733[3], 0, i732, 'avatar')
  i732.updateMode = i733[4]
  i732.hasTransformHierarchy = !!i733[5]
  i732.applyRootMotion = !!i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.humanBones = i734
  i732.enabled = !!i733[8]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.aspect = i741[1]
  i740.orthographic = !!i741[2]
  i740.orthographicSize = i741[3]
  i740.backgroundColor = new pc.Color(i741[4], i741[5], i741[6], i741[7])
  i740.nearClipPlane = i741[8]
  i740.farClipPlane = i741[9]
  i740.fieldOfView = i741[10]
  i740.depth = i741[11]
  i740.clearFlags = i741[12]
  i740.cullingMask = i741[13]
  i740.rect = i741[14]
  request.r(i741[15], i741[16], 0, i740, 'targetTexture')
  i740.usePhysicalProperties = !!i741[17]
  i740.focalLength = i741[18]
  i740.sensorSize = new pc.Vec2( i741[19], i741[20] )
  i740.lensShift = new pc.Vec2( i741[21], i741[22] )
  i740.gateFit = i741[23]
  i740.commandBufferCount = i741[24]
  i740.cameraType = i741[25]
  return i740
}

Deserializers["AdaptiveCameraPosition"] = function (request, data, root) {
  var i742 = root || request.c( 'AdaptiveCameraPosition' )
  var i743 = data
  i742.portraitSettings = request.d('AdaptiveCameraPosition+CameraSettings', i743[0], i742.portraitSettings)
  i742.landscapeSettings = request.d('AdaptiveCameraPosition+CameraSettings', i743[1], i742.landscapeSettings)
  i742.transitionSpeed = i743[2]
  i742.aspectRatioThreshold = i743[3]
  i742.debugMode = !!i743[4]
  return i742
}

Deserializers["AdaptiveCameraPosition+CameraSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'AdaptiveCameraPosition+CameraSettings' )
  var i745 = data
  i744.position = new pc.Vec3( i745[0], i745[1], i745[2] )
  i744.rotation = new pc.Vec3( i745[3], i745[4], i745[5] )
  i744.orthographicSize = i745[6]
  i744.fieldOfView = i745[7]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i747 = data
  i746.enabled = !!i747[0]
  i746.type = i747[1]
  i746.color = new pc.Color(i747[2], i747[3], i747[4], i747[5])
  i746.cullingMask = i747[6]
  i746.intensity = i747[7]
  i746.range = i747[8]
  i746.spotAngle = i747[9]
  i746.shadows = i747[10]
  i746.shadowNormalBias = i747[11]
  i746.shadowBias = i747[12]
  i746.shadowStrength = i747[13]
  i746.shadowResolution = i747[14]
  i746.lightmapBakeType = i747[15]
  i746.renderMode = i747[16]
  request.r(i747[17], i747[18], 0, i746, 'cookie')
  i746.cookieSize = i747[19]
  return i746
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i748 = root || request.c( 'Conveyor' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'canvasAnimator')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i751 = data
  i750.center = new pc.Vec3( i751[0], i751[1], i751[2] )
  i750.radius = i751[3]
  i750.height = i751[4]
  i750.direction = i751[5]
  i750.enabled = !!i751[6]
  i750.isTrigger = !!i751[7]
  request.r(i751[8], i751[9], 0, i750, 'material')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i753 = data
  i752.mass = i753[0]
  i752.drag = i753[1]
  i752.angularDrag = i753[2]
  i752.useGravity = !!i753[3]
  i752.isKinematic = !!i753[4]
  i752.constraints = i753[5]
  i752.maxAngularVelocity = i753[6]
  i752.collisionDetectionMode = i753[7]
  i752.interpolation = i753[8]
  return i752
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_FirstSelected')
  i754.m_sendNavigationEvents = !!i755[2]
  i754.m_DragThreshold = i755[3]
  return i754
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i757 = data
  i756.m_HorizontalAxis = i757[0]
  i756.m_VerticalAxis = i757[1]
  i756.m_SubmitButton = i757[2]
  i756.m_CancelButton = i757[3]
  i756.m_InputActionsPerSecond = i757[4]
  i756.m_RepeatDelay = i757[5]
  i756.m_ForceModuleActive = !!i757[6]
  i756.m_SendPointerHoverToParent = !!i757[7]
  return i756
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i758 = root || request.c( 'BuildManager' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, '_buildButton1')
  request.r(i759[2], i759[3], 0, i758, '_buildButton2')
  request.r(i759[4], i759[5], 0, i758, '_buildButton3')
  request.r(i759[6], i759[7], 0, i758, '_buildButtonObject1')
  request.r(i759[8], i759[9], 0, i758, '_buildButtonObject2')
  request.r(i759[10], i759[11], 0, i758, '_build1')
  request.r(i759[12], i759[13], 0, i758, '_build2')
  request.r(i759[14], i759[15], 0, i758, '_build3')
  request.r(i759[16], i759[17], 0, i758, '_moneyController')
  return i758
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i760 = root || request.c( 'CharactersMover' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760._normalRoutePoints = i762
  var i765 = i761[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i760._unloadPoints = i764
  request.r(i761[2], i761[3], 0, i760, '_defaultUnloadPoint')
  return i760
}

Deserializers["Forklift"] = function (request, data, root) {
  var i770 = root || request.c( 'Forklift' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770._cargo = i772
  return i770
}

Deserializers["Garage"] = function (request, data, root) {
  var i776 = root || request.c( 'Garage' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'chopper')
  return i776
}

Deserializers["ChopperManager"] = function (request, data, root) {
  var i778 = root || request.c( 'ChopperManager' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Chopper')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i778._choppers = i780
  return i778
}

Deserializers["Chopper"] = function (request, data, root) {
  var i784 = root || request.c( 'Chopper' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i784._cargo = i786
  return i784
}

Deserializers["ButtonLight"] = function (request, data, root) {
  var i788 = root || request.c( 'ButtonLight' )
  var i789 = data
  i788.flashSpeed = i789[0]
  i788.pauseBetweenFlashes = i789[1]
  i788.flashCount = i789[2]
  return i788
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Button' )
  var i791 = data
  i790.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i791[0], i790.m_OnClick)
  i790.m_Navigation = request.d('UnityEngine.UI.Navigation', i791[1], i790.m_Navigation)
  i790.m_Transition = i791[2]
  i790.m_Colors = request.d('UnityEngine.UI.ColorBlock', i791[3], i790.m_Colors)
  i790.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i791[4], i790.m_SpriteState)
  i790.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i791[5], i790.m_AnimationTriggers)
  i790.m_Interactable = !!i791[6]
  request.r(i791[7], i791[8], 0, i790, 'm_TargetGraphic')
  return i790
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i793 = data
  i792.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i793[0], i792.m_PersistentCalls)
  return i792
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('UnityEngine.Events.PersistentCall', i797[i + 0]));
  }
  i794.m_Calls = i796
  return i794
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_Target')
  i800.m_TargetAssemblyTypeName = i801[2]
  i800.m_MethodName = i801[3]
  i800.m_Mode = i801[4]
  i800.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i801[5], i800.m_Arguments)
  i800.m_CallState = i801[6]
  return i800
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_ObjectArgument')
  i802.m_ObjectArgumentAssemblyTypeName = i803[2]
  i802.m_IntArgument = i803[3]
  i802.m_FloatArgument = i803[4]
  i802.m_StringArgument = i803[5]
  i802.m_BoolArgument = !!i803[6]
  return i802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i805 = data
  i804.m_Mode = i805[0]
  i804.m_WrapAround = !!i805[1]
  request.r(i805[2], i805[3], 0, i804, 'm_SelectOnUp')
  request.r(i805[4], i805[5], 0, i804, 'm_SelectOnDown')
  request.r(i805[6], i805[7], 0, i804, 'm_SelectOnLeft')
  request.r(i805[8], i805[9], 0, i804, 'm_SelectOnRight')
  return i804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i807 = data
  i806.m_NormalColor = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.m_HighlightedColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.m_PressedColor = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.m_SelectedColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.m_DisabledColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.m_ColorMultiplier = i807[20]
  i806.m_FadeDuration = i807[21]
  return i806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_HighlightedSprite')
  request.r(i809[2], i809[3], 0, i808, 'm_PressedSprite')
  request.r(i809[4], i809[5], 0, i808, 'm_SelectedSprite')
  request.r(i809[6], i809[7], 0, i808, 'm_DisabledSprite')
  return i808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i811 = data
  i810.m_NormalTrigger = i811[0]
  i810.m_HighlightedTrigger = i811[1]
  i810.m_PressedTrigger = i811[2]
  i810.m_SelectedTrigger = i811[3]
  i810.m_DisabledTrigger = i811[4]
  return i810
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i813 = data
  i812.m_hasFontAssetChanged = !!i813[0]
  request.r(i813[1], i813[2], 0, i812, 'm_baseMaterial')
  i812.m_maskOffset = new pc.Vec4( i813[3], i813[4], i813[5], i813[6] )
  i812.m_text = i813[7]
  i812.m_isRightToLeft = !!i813[8]
  request.r(i813[9], i813[10], 0, i812, 'm_fontAsset')
  request.r(i813[11], i813[12], 0, i812, 'm_sharedMaterial')
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.m_fontSharedMaterials = i814
  request.r(i813[14], i813[15], 0, i812, 'm_fontMaterial')
  var i817 = i813[16]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i812.m_fontMaterials = i816
  i812.m_fontColor32 = UnityEngine.Color32.ConstructColor(i813[17], i813[18], i813[19], i813[20])
  i812.m_fontColor = new pc.Color(i813[21], i813[22], i813[23], i813[24])
  i812.m_enableVertexGradient = !!i813[25]
  i812.m_colorMode = i813[26]
  i812.m_fontColorGradient = request.d('TMPro.VertexGradient', i813[27], i812.m_fontColorGradient)
  request.r(i813[28], i813[29], 0, i812, 'm_fontColorGradientPreset')
  request.r(i813[30], i813[31], 0, i812, 'm_spriteAsset')
  i812.m_tintAllSprites = !!i813[32]
  request.r(i813[33], i813[34], 0, i812, 'm_StyleSheet')
  i812.m_TextStyleHashCode = i813[35]
  i812.m_overrideHtmlColors = !!i813[36]
  i812.m_faceColor = UnityEngine.Color32.ConstructColor(i813[37], i813[38], i813[39], i813[40])
  i812.m_fontSize = i813[41]
  i812.m_fontSizeBase = i813[42]
  i812.m_fontWeight = i813[43]
  i812.m_enableAutoSizing = !!i813[44]
  i812.m_fontSizeMin = i813[45]
  i812.m_fontSizeMax = i813[46]
  i812.m_fontStyle = i813[47]
  i812.m_HorizontalAlignment = i813[48]
  i812.m_VerticalAlignment = i813[49]
  i812.m_textAlignment = i813[50]
  i812.m_characterSpacing = i813[51]
  i812.m_wordSpacing = i813[52]
  i812.m_lineSpacing = i813[53]
  i812.m_lineSpacingMax = i813[54]
  i812.m_paragraphSpacing = i813[55]
  i812.m_charWidthMaxAdj = i813[56]
  i812.m_enableWordWrapping = !!i813[57]
  i812.m_wordWrappingRatios = i813[58]
  i812.m_overflowMode = i813[59]
  request.r(i813[60], i813[61], 0, i812, 'm_linkedTextComponent')
  request.r(i813[62], i813[63], 0, i812, 'parentLinkedComponent')
  i812.m_enableKerning = !!i813[64]
  i812.m_enableExtraPadding = !!i813[65]
  i812.checkPaddingRequired = !!i813[66]
  i812.m_isRichText = !!i813[67]
  i812.m_parseCtrlCharacters = !!i813[68]
  i812.m_isOrthographic = !!i813[69]
  i812.m_isCullingEnabled = !!i813[70]
  i812.m_horizontalMapping = i813[71]
  i812.m_verticalMapping = i813[72]
  i812.m_uvLineOffset = i813[73]
  i812.m_geometrySortingOrder = i813[74]
  i812.m_IsTextObjectScaleStatic = !!i813[75]
  i812.m_VertexBufferAutoSizeReduction = !!i813[76]
  i812.m_useMaxVisibleDescender = !!i813[77]
  i812.m_pageToDisplay = i813[78]
  i812.m_margin = new pc.Vec4( i813[79], i813[80], i813[81], i813[82] )
  i812.m_isUsingLegacyAnimationComponent = !!i813[83]
  i812.m_isVolumetricText = !!i813[84]
  request.r(i813[85], i813[86], 0, i812, 'm_Material')
  i812.m_Maskable = !!i813[87]
  i812.m_Color = new pc.Color(i813[88], i813[89], i813[90], i813[91])
  i812.m_RaycastTarget = !!i813[92]
  i812.m_RaycastPadding = new pc.Vec4( i813[93], i813[94], i813[95], i813[96] )
  return i812
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.VertexGradient' )
  var i819 = data
  i818.topLeft = new pc.Color(i819[0], i819[1], i819[2], i819[3])
  i818.topRight = new pc.Color(i819[4], i819[5], i819[6], i819[7])
  i818.bottomLeft = new pc.Color(i819[8], i819[9], i819[10], i819[11])
  i818.bottomRight = new pc.Color(i819[12], i819[13], i819[14], i819[15])
  return i818
}

Deserializers["Build"] = function (request, data, root) {
  var i820 = root || request.c( 'Build' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'building')
  return i820
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i822 = root || request.c( 'UnloadPoint' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, '_targetTruck')
  i822._allowForkliftToLoadHalfFullTrucks = !!i823[2]
  i822.delay = i823[3]
  i822.moveDuration = i823[4]
  return i822
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i824 = root || request.c( 'LoadPoint' )
  var i825 = data
  i824.delay = i825[0]
  i824.moveDuration = i825[1]
  return i824
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i826 = root || request.c( 'SimplePoint' )
  var i827 = data
  i826.delay = i827[0]
  i826.moveDuration = i827[1]
  return i826
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i828 = root || request.c( 'MoneyController' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, '_moneyBalance')
  request.r(i829[2], i829[3], 0, i828, '_moneyFlyAnimation')
  return i828
}

Deserializers["MoneyFlyAnimation"] = function (request, data, root) {
  var i830 = root || request.c( 'MoneyFlyAnimation' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'worldStartPoint')
  request.r(i831[2], i831[3], 0, i830, 'moneyPrefab3D')
  i830.poolSize = i831[4]
  i830.minDuration = i831[5]
  i830.maxDuration = i831[6]
  i830.spread = i831[7]
  request.r(i831[8], i831[9], 0, i830, 'uiTargetPoint')
  return i830
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i832 = root || request.c( 'MoneyBalance' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, '_text')
  return i832
}

Deserializers["TruckManager"] = function (request, data, root) {
  var i834 = root || request.c( 'TruckManager' )
  var i835 = data
  var i837 = i835[0]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('Truck')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834._trucks = i836
  request.r(i835[1], i835[2], 0, i834, '_unloadPoint')
  i834._sendAllTrucksWhenAllFull = !!i835[3]
  return i834
}

Deserializers["TruckUnloadPoint"] = function (request, data, root) {
  var i840 = root || request.c( 'TruckUnloadPoint' )
  var i841 = data
  i840._unloadDuration = i841[0]
  request.r(i841[1], i841[2], 0, i840, '_truckStopPosition')
  i840.delay = i841[3]
  i840.moveDuration = i841[4]
  return i840
}

Deserializers["Truck"] = function (request, data, root) {
  var i842 = root || request.c( 'Truck' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'progressBarImage')
  var i845 = i843[2]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i842._cargoSlots = i844
  i842._maxCapacity = i843[3]
  i842._logLoadSoundName = i843[4]
  i842._truckFullSoundName = i843[5]
  i842._playCargoSounds = !!i843[6]
  return i842
}

Deserializers["TruckMover"] = function (request, data, root) {
  var i846 = root || request.c( 'TruckMover' )
  var i847 = data
  i846._moveEase = i847[0]
  request.r(i847[1], i847[2], 0, i846, '_startPosition')
  request.r(i847[3], i847[4], 0, i846, '_engineSound')
  return i846
}

Deserializers["GameManager"] = function (request, data, root) {
  var i848 = root || request.c( 'GameManager' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'tutorialObject')
  request.r(i849[2], i849[3], 0, i848, 'tutorialAnimator')
  i848.idleTimeForTutorial = i849[4]
  request.r(i849[5], i849[6], 0, i848, 'upgradeButton')
  request.r(i849[7], i849[8], 0, i848, 'upgradeButtonGameObject')
  request.r(i849[9], i849[10], 0, i848, 'secondRequiredButton')
  request.r(i849[11], i849[12], 0, i848, 'packShotObject')
  request.r(i849[13], i849[14], 0, i848, 'moneyController')
  request.r(i849[15], i849[16], 0, i848, 'buildManager')
  return i848
}

Deserializers["SimpleAudioManager"] = function (request, data, root) {
  var i850 = root || request.c( 'SimpleAudioManager' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'progressBarSound')
  request.r(i851[2], i851[3], 0, i850, 'conveyorAnimationSound')
  request.r(i851[4], i851[5], 0, i850, 'logLoadSound')
  request.r(i851[6], i851[7], 0, i850, 'buttonClickSound')
  request.r(i851[8], i851[9], 0, i850, 'houseAppearSound')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i853 = data
  i852.ambientIntensity = i853[0]
  i852.reflectionIntensity = i853[1]
  i852.ambientMode = i853[2]
  i852.ambientLight = new pc.Color(i853[3], i853[4], i853[5], i853[6])
  i852.ambientSkyColor = new pc.Color(i853[7], i853[8], i853[9], i853[10])
  i852.ambientGroundColor = new pc.Color(i853[11], i853[12], i853[13], i853[14])
  i852.ambientEquatorColor = new pc.Color(i853[15], i853[16], i853[17], i853[18])
  i852.fogColor = new pc.Color(i853[19], i853[20], i853[21], i853[22])
  i852.fogEndDistance = i853[23]
  i852.fogStartDistance = i853[24]
  i852.fogDensity = i853[25]
  i852.fog = !!i853[26]
  request.r(i853[27], i853[28], 0, i852, 'skybox')
  i852.fogMode = i853[29]
  var i855 = i853[30]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i855[i + 0]) );
  }
  i852.lightmaps = i854
  i852.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i853[31], i852.lightProbes)
  i852.lightmapsMode = i853[32]
  i852.mixedBakeMode = i853[33]
  i852.environmentLightingMode = i853[34]
  i852.ambientProbe = new pc.SphericalHarmonicsL2(i853[35])
  i852.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i853[36])
  i852.useReferenceAmbientProbe = !!i853[37]
  request.r(i853[38], i853[39], 0, i852, 'customReflection')
  request.r(i853[40], i853[41], 0, i852, 'defaultReflection')
  i852.defaultReflectionMode = i853[42]
  i852.defaultReflectionResolution = i853[43]
  i852.sunLightObjectId = i853[44]
  i852.pixelLightCount = i853[45]
  i852.defaultReflectionHDR = !!i853[46]
  i852.hasLightDataAsset = !!i853[47]
  i852.hasManualGenerate = !!i853[48]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'lightmapColor')
  request.r(i859[2], i859[3], 0, i858, 'lightmapDirection')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i860 = root || new UnityEngine.LightProbes()
  var i861 = data
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i871[i + 0]));
  }
  i868.ShaderCompilationErrors = i870
  i868.name = i869[1]
  i868.guid = i869[2]
  var i873 = i869[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.shaderDefinedKeywords = i872
  var i875 = i869[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i875[i + 0]) );
  }
  i868.passes = i874
  var i877 = i869[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i877[i + 0]) );
  }
  i868.usePasses = i876
  var i879 = i869[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i879[i + 0]) );
  }
  i868.defaultParameterValues = i878
  request.r(i869[7], i869[8], 0, i868, 'unityFallbackShader')
  i868.readDepth = !!i869[9]
  i868.isCreatedByShaderGraph = !!i869[10]
  i868.compiled = !!i869[11]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i883 = data
  i882.shaderName = i883[0]
  i882.errorMessage = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i888 = root || new pc.UnityShaderPass()
  var i889 = data
  i888.id = i889[0]
  i888.subShaderIndex = i889[1]
  i888.name = i889[2]
  i888.passType = i889[3]
  i888.grabPassTextureName = i889[4]
  i888.usePass = !!i889[5]
  i888.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[6], i888.zTest)
  i888.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[7], i888.zWrite)
  i888.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[8], i888.culling)
  i888.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i889[9], i888.blending)
  i888.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i889[10], i888.alphaBlending)
  i888.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[11], i888.colorWriteMask)
  i888.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[12], i888.offsetUnits)
  i888.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[13], i888.offsetFactor)
  i888.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[14], i888.stencilRef)
  i888.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[15], i888.stencilReadMask)
  i888.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[16], i888.stencilWriteMask)
  i888.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[17], i888.stencilOp)
  i888.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[18], i888.stencilOpFront)
  i888.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[19], i888.stencilOpBack)
  var i891 = i889[20]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i891[i + 0]) );
  }
  i888.tags = i890
  var i893 = i889[21]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.passDefinedKeywords = i892
  var i895 = i889[22]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i895[i + 0]) );
  }
  i888.passDefinedKeywordGroups = i894
  var i897 = i889[23]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i897[i + 0]) );
  }
  i888.variants = i896
  var i899 = i889[24]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i899[i + 0]) );
  }
  i888.excludedVariants = i898
  i888.hasDepthReader = !!i889[25]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i901 = data
  i900.val = i901[0]
  i900.name = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i903 = data
  i902.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[0], i902.src)
  i902.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[1], i902.dst)
  i902.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[2], i902.op)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i905 = data
  i904.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[0], i904.pass)
  i904.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[1], i904.fail)
  i904.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[2], i904.zFail)
  i904.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[3], i904.comp)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i909 = data
  i908.name = i909[0]
  i908.value = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.hasDiscard = !!i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i919 = data
  i918.passId = i919[0]
  i918.subShaderIndex = i919[1]
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i918.keywords = i920
  i918.vertexProgram = i919[3]
  i918.fragmentProgram = i919[4]
  i918.exportedForWebGl2 = !!i919[5]
  i918.readDepth = !!i919[6]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'shader')
  i924.pass = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i929 = data
  i928.name = i929[0]
  i928.type = i929[1]
  i928.value = new pc.Vec4( i929[2], i929[3], i929[4], i929[5] )
  i928.textureValue = i929[6]
  i928.shaderPropertyFlag = i929[7]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i931 = data
  i930.name = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'texture')
  i930.aabb = i931[3]
  i930.vertices = i931[4]
  i930.triangles = i931[5]
  i930.textureRect = UnityEngine.Rect.MinMaxRect(i931[6], i931[7], i931[8], i931[9])
  i930.packedRect = UnityEngine.Rect.MinMaxRect(i931[10], i931[11], i931[12], i931[13])
  i930.border = new pc.Vec4( i931[14], i931[15], i931[16], i931[17] )
  i930.transparency = i931[18]
  i930.bounds = i931[19]
  i930.pixelsPerUnit = i931[20]
  i930.textureWidth = i931[21]
  i930.textureHeight = i931[22]
  i930.nativeSize = new pc.Vec2( i931[23], i931[24] )
  i930.pivot = new pc.Vec2( i931[25], i931[26] )
  i930.textureRectOffset = new pc.Vec2( i931[27], i931[28] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i933 = data
  i932.name = i933[0]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i935 = data
  i934.name = i935[0]
  i934.wrapMode = i935[1]
  i934.isLooping = !!i935[2]
  i934.length = i935[3]
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i937[i + 0]) );
  }
  i934.curves = i936
  var i939 = i935[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i939[i + 0]) );
  }
  i934.events = i938
  i934.halfPrecision = !!i935[6]
  i934._frameRate = i935[7]
  i934.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i935[8], i934.localBounds)
  i934.hasMuscleCurves = !!i935[9]
  var i941 = i935[10]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i934.clipMuscleConstant = i940
  i934.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i935[11], i934.clipBindingConstant)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i945 = data
  i944.path = i945[0]
  i944.hash = i945[1]
  i944.componentType = i945[2]
  i944.property = i945[3]
  i944.keys = i945[4]
  var i947 = i945[5]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i947[i + 0]) );
  }
  i944.objectReferenceKeys = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i951 = data
  i950.time = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'value')
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i955 = data
  i954.functionName = i955[0]
  i954.floatParameter = i955[1]
  i954.intParameter = i955[2]
  i954.stringParameter = i955[3]
  request.r(i955[4], i955[5], 0, i954, 'objectReferenceParameter')
  i954.time = i955[6]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i957 = data
  i956.center = new pc.Vec3( i957[0], i957[1], i957[2] )
  i956.extends = new pc.Vec3( i957[3], i957[4], i957[5] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i960.genericBindings = i962
  var i965 = i961[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.pptrCurveMapping = i964
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i967 = data
  i966.name = i967[0]
  i966.ascent = i967[1]
  i966.originalLineHeight = i967[2]
  i966.fontSize = i967[3]
  var i969 = i967[4]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i969[i + 0]) );
  }
  i966.characterInfo = i968
  request.r(i967[5], i967[6], 0, i966, 'texture')
  i966.originalFontSize = i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i973 = data
  i972.index = i973[0]
  i972.advance = i973[1]
  i972.bearing = i973[2]
  i972.glyphWidth = i973[3]
  i972.glyphHeight = i973[4]
  i972.minX = i973[5]
  i972.maxX = i973[6]
  i972.minY = i973[7]
  i972.maxY = i973[8]
  i972.uvBottomLeftX = i973[9]
  i972.uvBottomLeftY = i973[10]
  i972.uvBottomRightX = i973[11]
  i972.uvBottomRightY = i973[12]
  i972.uvTopLeftX = i973[13]
  i972.uvTopLeftY = i973[14]
  i972.uvTopRightX = i973[15]
  i972.uvTopRightY = i973[16]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i975 = data
  i974.name = i975[0]
  var i977 = i975[1]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i977[i + 0]) );
  }
  i974.layers = i976
  var i979 = i975[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i979[i + 0]) );
  }
  i974.parameters = i978
  i974.animationClips = i975[3]
  i974.avatarUnsupported = i975[4]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i983 = data
  i982.name = i983[0]
  i982.defaultWeight = i983[1]
  i982.blendingMode = i983[2]
  i982.avatarMask = i983[3]
  i982.syncedLayerIndex = i983[4]
  i982.syncedLayerAffectsTiming = !!i983[5]
  i982.syncedLayers = i983[6]
  i982.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i983[7], i982.stateMachine)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i985 = data
  i984.id = i985[0]
  i984.name = i985[1]
  i984.path = i985[2]
  var i987 = i985[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i987[i + 0]) );
  }
  i984.states = i986
  var i989 = i985[4]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i989[i + 0]) );
  }
  i984.machines = i988
  var i991 = i985[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i991[i + 0]) );
  }
  i984.entryStateTransitions = i990
  var i993 = i985[6]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i993[i + 0]) );
  }
  i984.exitStateTransitions = i992
  var i995 = i985[7]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i995[i + 0]) );
  }
  i984.anyStateTransitions = i994
  i984.defaultStateId = i985[8]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i999 = data
  i998.id = i999[0]
  i998.name = i999[1]
  i998.cycleOffset = i999[2]
  i998.cycleOffsetParameter = i999[3]
  i998.cycleOffsetParameterActive = !!i999[4]
  i998.mirror = !!i999[5]
  i998.mirrorParameter = i999[6]
  i998.mirrorParameterActive = !!i999[7]
  i998.motionId = i999[8]
  i998.nameHash = i999[9]
  i998.fullPathHash = i999[10]
  i998.speed = i999[11]
  i998.speedParameter = i999[12]
  i998.speedParameterActive = !!i999[13]
  i998.tag = i999[14]
  i998.tagHash = i999[15]
  i998.writeDefaultValues = !!i999[16]
  var i1001 = i999[17]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.behaviours = i1000
  var i1003 = i999[18]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1003[i + 0]) );
  }
  i998.transitions = i1002
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1009 = data
  i1008.fullPath = i1009[0]
  i1008.canTransitionToSelf = !!i1009[1]
  i1008.duration = i1009[2]
  i1008.exitTime = i1009[3]
  i1008.hasExitTime = !!i1009[4]
  i1008.hasFixedDuration = !!i1009[5]
  i1008.interruptionSource = i1009[6]
  i1008.offset = i1009[7]
  i1008.orderedInterruption = !!i1009[8]
  i1008.destinationStateId = i1009[9]
  i1008.isExit = !!i1009[10]
  i1008.mute = !!i1009[11]
  i1008.solo = !!i1009[12]
  var i1011 = i1009[13]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1011[i + 0]) );
  }
  i1008.conditions = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1017 = data
  i1016.destinationStateId = i1017[0]
  i1016.isExit = !!i1017[1]
  i1016.mute = !!i1017[2]
  i1016.solo = !!i1017[3]
  var i1019 = i1017[4]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1019[i + 0]) );
  }
  i1016.conditions = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1023 = data
  i1022.defaultBool = !!i1023[0]
  i1022.defaultFloat = i1023[1]
  i1022.defaultInt = i1023[2]
  i1022.name = i1023[3]
  i1022.nameHash = i1023[4]
  i1022.type = i1023[5]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1027 = data
  i1026.mode = i1027[0]
  i1026.parameter = i1027[1]
  i1026.threshold = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.bytes64 = i1029[1]
  i1028.data = i1029[2]
  return i1028
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1031 = data
  i1030.hashCode = i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'material')
  i1030.materialHashCode = i1031[3]
  request.r(i1031[4], i1031[5], 0, i1030, 'atlas')
  i1030.normalStyle = i1031[6]
  i1030.normalSpacingOffset = i1031[7]
  i1030.boldStyle = i1031[8]
  i1030.boldSpacing = i1031[9]
  i1030.italicStyle = i1031[10]
  i1030.tabSize = i1031[11]
  i1030.m_Version = i1031[12]
  i1030.m_SourceFontFileGUID = i1031[13]
  request.r(i1031[14], i1031[15], 0, i1030, 'm_SourceFontFile_EditorRef')
  request.r(i1031[16], i1031[17], 0, i1030, 'm_SourceFontFile')
  i1030.m_AtlasPopulationMode = i1031[18]
  i1030.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1031[19], i1030.m_FaceInfo)
  var i1033 = i1031[20]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('UnityEngine.TextCore.Glyph', i1033[i + 0]));
  }
  i1030.m_GlyphTable = i1032
  var i1035 = i1031[21]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_Character', i1035[i + 0]));
  }
  i1030.m_CharacterTable = i1034
  var i1037 = i1031[22]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1030.m_AtlasTextures = i1036
  i1030.m_AtlasTextureIndex = i1031[23]
  i1030.m_IsMultiAtlasTexturesEnabled = !!i1031[24]
  i1030.m_ClearDynamicDataOnBuild = !!i1031[25]
  var i1039 = i1031[26]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('UnityEngine.TextCore.GlyphRect', i1039[i + 0]));
  }
  i1030.m_UsedGlyphRects = i1038
  var i1041 = i1031[27]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('UnityEngine.TextCore.GlyphRect', i1041[i + 0]));
  }
  i1030.m_FreeGlyphRects = i1040
  i1030.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1031[28], i1030.m_fontInfo)
  i1030.m_AtlasWidth = i1031[29]
  i1030.m_AtlasHeight = i1031[30]
  i1030.m_AtlasPadding = i1031[31]
  i1030.m_AtlasRenderMode = i1031[32]
  var i1043 = i1031[33]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('TMPro.TMP_Glyph', i1043[i + 0]));
  }
  i1030.m_glyphInfoList = i1042
  i1030.m_KerningTable = request.d('TMPro.KerningTable', i1031[34], i1030.m_KerningTable)
  i1030.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1031[35], i1030.m_FontFeatureTable)
  var i1045 = i1031[36]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1030.fallbackFontAssets = i1044
  var i1047 = i1031[37]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 1, i1046, '')
  }
  i1030.m_FallbackFontAssetTable = i1046
  i1030.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1031[38], i1030.m_CreationSettings)
  var i1049 = i1031[39]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('TMPro.TMP_FontWeightPair', i1049[i + 0]) );
  }
  i1030.m_FontWeightTable = i1048
  var i1051 = i1031[40]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('TMPro.TMP_FontWeightPair', i1051[i + 0]) );
  }
  i1030.fontWeights = i1050
  return i1030
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1053 = data
  i1052.m_FaceIndex = i1053[0]
  i1052.m_FamilyName = i1053[1]
  i1052.m_StyleName = i1053[2]
  i1052.m_PointSize = i1053[3]
  i1052.m_Scale = i1053[4]
  i1052.m_UnitsPerEM = i1053[5]
  i1052.m_LineHeight = i1053[6]
  i1052.m_AscentLine = i1053[7]
  i1052.m_CapLine = i1053[8]
  i1052.m_MeanLine = i1053[9]
  i1052.m_Baseline = i1053[10]
  i1052.m_DescentLine = i1053[11]
  i1052.m_SuperscriptOffset = i1053[12]
  i1052.m_SuperscriptSize = i1053[13]
  i1052.m_SubscriptOffset = i1053[14]
  i1052.m_SubscriptSize = i1053[15]
  i1052.m_UnderlineOffset = i1053[16]
  i1052.m_UnderlineThickness = i1053[17]
  i1052.m_StrikethroughOffset = i1053[18]
  i1052.m_StrikethroughThickness = i1053[19]
  i1052.m_TabWidth = i1053[20]
  return i1052
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1057 = data
  i1056.m_Index = i1057[0]
  i1056.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1057[1], i1056.m_Metrics)
  i1056.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1057[2], i1056.m_GlyphRect)
  i1056.m_Scale = i1057[3]
  i1056.m_AtlasIndex = i1057[4]
  i1056.m_ClassDefinitionType = i1057[5]
  return i1056
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1059 = data
  i1058.m_Width = i1059[0]
  i1058.m_Height = i1059[1]
  i1058.m_HorizontalBearingX = i1059[2]
  i1058.m_HorizontalBearingY = i1059[3]
  i1058.m_HorizontalAdvance = i1059[4]
  return i1058
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1061 = data
  i1060.m_X = i1061[0]
  i1060.m_Y = i1061[1]
  i1060.m_Width = i1061[2]
  i1060.m_Height = i1061[3]
  return i1060
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_Character' )
  var i1065 = data
  i1064.m_ElementType = i1065[0]
  i1064.m_Unicode = i1065[1]
  i1064.m_GlyphIndex = i1065[2]
  i1064.m_Scale = i1065[3]
  return i1064
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1071 = data
  i1070.Name = i1071[0]
  i1070.PointSize = i1071[1]
  i1070.Scale = i1071[2]
  i1070.CharacterCount = i1071[3]
  i1070.LineHeight = i1071[4]
  i1070.Baseline = i1071[5]
  i1070.Ascender = i1071[6]
  i1070.CapHeight = i1071[7]
  i1070.Descender = i1071[8]
  i1070.CenterLine = i1071[9]
  i1070.SuperscriptOffset = i1071[10]
  i1070.SubscriptOffset = i1071[11]
  i1070.SubSize = i1071[12]
  i1070.Underline = i1071[13]
  i1070.UnderlineThickness = i1071[14]
  i1070.strikethrough = i1071[15]
  i1070.strikethroughThickness = i1071[16]
  i1070.TabWidth = i1071[17]
  i1070.Padding = i1071[18]
  i1070.AtlasWidth = i1071[19]
  i1070.AtlasHeight = i1071[20]
  return i1070
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.x = i1075[1]
  i1074.y = i1075[2]
  i1074.width = i1075[3]
  i1074.height = i1075[4]
  i1074.xOffset = i1075[5]
  i1074.yOffset = i1075[6]
  i1074.xAdvance = i1075[7]
  i1074.scale = i1075[8]
  return i1074
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.KerningTable' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.KerningPair', i1079[i + 0]));
  }
  i1076.kerningPairs = i1078
  return i1076
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.KerningPair' )
  var i1083 = data
  i1082.xOffset = i1083[0]
  i1082.m_FirstGlyph = i1083[1]
  i1082.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1083[2], i1082.m_FirstGlyphAdjustments)
  i1082.m_SecondGlyph = i1083[3]
  i1082.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1083[4], i1082.m_SecondGlyphAdjustments)
  i1082.m_IgnoreSpacingAdjustments = !!i1083[5]
  return i1082
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1087[i + 0]));
  }
  i1084.m_GlyphPairAdjustmentRecords = i1086
  return i1084
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1091 = data
  i1090.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1091[0], i1090.m_FirstAdjustmentRecord)
  i1090.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1091[1], i1090.m_SecondAdjustmentRecord)
  i1090.m_FeatureLookupFlags = i1091[2]
  return i1090
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1093 = data
  i1092.m_GlyphIndex = i1093[0]
  i1092.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1093[1], i1092.m_GlyphValueRecord)
  return i1092
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1095 = data
  i1094.m_XPlacement = i1095[0]
  i1094.m_YPlacement = i1095[1]
  i1094.m_XAdvance = i1095[2]
  i1094.m_YAdvance = i1095[3]
  return i1094
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1099 = data
  i1098.sourceFontFileName = i1099[0]
  i1098.sourceFontFileGUID = i1099[1]
  i1098.pointSizeSamplingMode = i1099[2]
  i1098.pointSize = i1099[3]
  i1098.padding = i1099[4]
  i1098.packingMode = i1099[5]
  i1098.atlasWidth = i1099[6]
  i1098.atlasHeight = i1099[7]
  i1098.characterSetSelectionMode = i1099[8]
  i1098.characterSequence = i1099[9]
  i1098.referencedFontAssetGUID = i1099[10]
  i1098.referencedTextAssetGUID = i1099[11]
  i1098.fontStyle = i1099[12]
  i1098.fontStyleModifier = i1099[13]
  i1098.renderMode = i1099[14]
  i1098.includeFontFeatures = !!i1099[15]
  return i1098
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'regularTypeface')
  request.r(i1103[2], i1103[3], 0, i1102, 'italicTypeface')
  return i1102
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1105 = data
  i1104.useSafeMode = !!i1105[0]
  i1104.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1105[1], i1104.safeModeOptions)
  i1104.timeScale = i1105[2]
  i1104.unscaledTimeScale = i1105[3]
  i1104.useSmoothDeltaTime = !!i1105[4]
  i1104.maxSmoothUnscaledTime = i1105[5]
  i1104.rewindCallbackMode = i1105[6]
  i1104.showUnityEditorReport = !!i1105[7]
  i1104.logBehaviour = i1105[8]
  i1104.drawGizmos = !!i1105[9]
  i1104.defaultRecyclable = !!i1105[10]
  i1104.defaultAutoPlay = i1105[11]
  i1104.defaultUpdateType = i1105[12]
  i1104.defaultTimeScaleIndependent = !!i1105[13]
  i1104.defaultEaseType = i1105[14]
  i1104.defaultEaseOvershootOrAmplitude = i1105[15]
  i1104.defaultEasePeriod = i1105[16]
  i1104.defaultAutoKill = !!i1105[17]
  i1104.defaultLoopType = i1105[18]
  i1104.debugMode = !!i1105[19]
  i1104.debugStoreTargetId = !!i1105[20]
  i1104.showPreviewPanel = !!i1105[21]
  i1104.storeSettingsLocation = i1105[22]
  i1104.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1105[23], i1104.modules)
  i1104.createASMDEF = !!i1105[24]
  i1104.showPlayingTweens = !!i1105[25]
  i1104.showPausedTweens = !!i1105[26]
  return i1104
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1106 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1107 = data
  i1106.logBehaviour = i1107[0]
  i1106.nestedTweenFailureBehaviour = i1107[1]
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1109 = data
  i1108.showPanel = !!i1109[0]
  i1108.audioEnabled = !!i1109[1]
  i1108.physicsEnabled = !!i1109[2]
  i1108.physics2DEnabled = !!i1109[3]
  i1108.spriteEnabled = !!i1109[4]
  i1108.uiEnabled = !!i1109[5]
  i1108.textMeshProEnabled = !!i1109[6]
  i1108.tk2DEnabled = !!i1109[7]
  i1108.deAudioEnabled = !!i1109[8]
  i1108.deUnityExtendedEnabled = !!i1109[9]
  i1108.epoOutlineEnabled = !!i1109[10]
  return i1108
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_Settings' )
  var i1111 = data
  i1110.m_enableWordWrapping = !!i1111[0]
  i1110.m_enableKerning = !!i1111[1]
  i1110.m_enableExtraPadding = !!i1111[2]
  i1110.m_enableTintAllSprites = !!i1111[3]
  i1110.m_enableParseEscapeCharacters = !!i1111[4]
  i1110.m_EnableRaycastTarget = !!i1111[5]
  i1110.m_GetFontFeaturesAtRuntime = !!i1111[6]
  i1110.m_missingGlyphCharacter = i1111[7]
  i1110.m_warningsDisabled = !!i1111[8]
  request.r(i1111[9], i1111[10], 0, i1110, 'm_defaultFontAsset')
  i1110.m_defaultFontAssetPath = i1111[11]
  i1110.m_defaultFontSize = i1111[12]
  i1110.m_defaultAutoSizeMinRatio = i1111[13]
  i1110.m_defaultAutoSizeMaxRatio = i1111[14]
  i1110.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1111[15], i1111[16] )
  i1110.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1111[17], i1111[18] )
  i1110.m_autoSizeTextContainer = !!i1111[19]
  i1110.m_IsTextObjectScaleStatic = !!i1111[20]
  var i1113 = i1111[21]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1110.m_fallbackFontAssets = i1112
  i1110.m_matchMaterialPreset = !!i1111[22]
  request.r(i1111[23], i1111[24], 0, i1110, 'm_defaultSpriteAsset')
  i1110.m_defaultSpriteAssetPath = i1111[25]
  i1110.m_enableEmojiSupport = !!i1111[26]
  i1110.m_MissingCharacterSpriteUnicode = i1111[27]
  i1110.m_defaultColorGradientPresetsPath = i1111[28]
  request.r(i1111[29], i1111[30], 0, i1110, 'm_defaultStyleSheet')
  i1110.m_StyleSheetsResourcePath = i1111[31]
  request.r(i1111[32], i1111[33], 0, i1110, 'm_leadingCharacters')
  request.r(i1111[34], i1111[35], 0, i1110, 'm_followingCharacters')
  i1110.m_UseModernHangulLineBreakingRules = !!i1111[36]
  return i1110
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1115 = data
  i1114.hashCode = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'material')
  i1114.materialHashCode = i1115[3]
  request.r(i1115[4], i1115[5], 0, i1114, 'spriteSheet')
  var i1117 = i1115[6]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.TMP_Sprite', i1117[i + 0]));
  }
  i1114.spriteInfoList = i1116
  var i1119 = i1115[7]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1114.fallbackSpriteAssets = i1118
  i1114.m_Version = i1115[8]
  i1114.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1115[9], i1114.m_FaceInfo)
  var i1121 = i1115[10]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_SpriteCharacter', i1121[i + 0]));
  }
  i1114.m_SpriteCharacterTable = i1120
  var i1123 = i1115[11]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_SpriteGlyph', i1123[i + 0]));
  }
  i1114.m_SpriteGlyphTable = i1122
  return i1114
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.hashCode = i1127[1]
  i1126.unicode = i1127[2]
  i1126.pivot = new pc.Vec2( i1127[3], i1127[4] )
  request.r(i1127[5], i1127[6], 0, i1126, 'sprite')
  i1126.id = i1127[7]
  i1126.x = i1127[8]
  i1126.y = i1127[9]
  i1126.width = i1127[10]
  i1126.height = i1127[11]
  i1126.xOffset = i1127[12]
  i1126.yOffset = i1127[13]
  i1126.xAdvance = i1127[14]
  i1126.scale = i1127[15]
  return i1126
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1133 = data
  i1132.m_Name = i1133[0]
  i1132.m_HashCode = i1133[1]
  i1132.m_ElementType = i1133[2]
  i1132.m_Unicode = i1133[3]
  i1132.m_GlyphIndex = i1133[4]
  i1132.m_Scale = i1133[5]
  return i1132
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'sprite')
  i1136.m_Index = i1137[2]
  i1136.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1137[3], i1136.m_Metrics)
  i1136.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1137[4], i1136.m_GlyphRect)
  i1136.m_Scale = i1137[5]
  i1136.m_AtlasIndex = i1137[6]
  i1136.m_ClassDefinitionType = i1137[7]
  return i1136
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Style', i1141[i + 0]));
  }
  i1138.m_StyleList = i1140
  return i1138
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_Style' )
  var i1145 = data
  i1144.m_Name = i1145[0]
  i1144.m_HashCode = i1145[1]
  i1144.m_OpeningDefinition = i1145[2]
  i1144.m_ClosingDefinition = i1145[3]
  i1144.m_OpeningTagArray = i1145[4]
  i1144.m_ClosingTagArray = i1145[5]
  i1144.m_OpeningTagUnicodeArray = i1145[6]
  i1144.m_ClosingTagUnicodeArray = i1145[7]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1149[i + 0]) );
  }
  i1146.files = i1148
  i1146.componentToPrefabIds = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1153 = data
  i1152.path = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'unityObject')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1157[i + 0]) );
  }
  i1154.scriptsExecutionOrder = i1156
  var i1159 = i1155[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1159[i + 0]) );
  }
  i1154.sortingLayers = i1158
  var i1161 = i1155[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1161[i + 0]) );
  }
  i1154.cullingLayers = i1160
  i1154.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1155[3], i1154.timeSettings)
  i1154.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1155[4], i1154.physicsSettings)
  i1154.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1155[5], i1154.physics2DSettings)
  i1154.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1155[6], i1154.qualitySettings)
  i1154.enableRealtimeShadows = !!i1155[7]
  i1154.enableAutoInstancing = !!i1155[8]
  i1154.enableDynamicBatching = !!i1155[9]
  i1154.lightmapEncodingQuality = i1155[10]
  i1154.desiredColorSpace = i1155[11]
  var i1163 = i1155[12]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1154.allTags = i1162
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.value = i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.value = i1171[2]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1177 = data
  i1176.fixedDeltaTime = i1177[0]
  i1176.maximumDeltaTime = i1177[1]
  i1176.timeScale = i1177[2]
  i1176.maximumParticleTimestep = i1177[3]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1179 = data
  i1178.gravity = new pc.Vec3( i1179[0], i1179[1], i1179[2] )
  i1178.defaultSolverIterations = i1179[3]
  i1178.bounceThreshold = i1179[4]
  i1178.autoSyncTransforms = !!i1179[5]
  i1178.autoSimulation = !!i1179[6]
  var i1181 = i1179[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1181[i + 0]) );
  }
  i1178.collisionMatrix = i1180
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1185 = data
  i1184.enabled = !!i1185[0]
  i1184.layerId = i1185[1]
  i1184.otherLayerId = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'material')
  i1186.gravity = new pc.Vec2( i1187[2], i1187[3] )
  i1186.positionIterations = i1187[4]
  i1186.velocityIterations = i1187[5]
  i1186.velocityThreshold = i1187[6]
  i1186.maxLinearCorrection = i1187[7]
  i1186.maxAngularCorrection = i1187[8]
  i1186.maxTranslationSpeed = i1187[9]
  i1186.maxRotationSpeed = i1187[10]
  i1186.baumgarteScale = i1187[11]
  i1186.baumgarteTOIScale = i1187[12]
  i1186.timeToSleep = i1187[13]
  i1186.linearSleepTolerance = i1187[14]
  i1186.angularSleepTolerance = i1187[15]
  i1186.defaultContactOffset = i1187[16]
  i1186.autoSimulation = !!i1187[17]
  i1186.queriesHitTriggers = !!i1187[18]
  i1186.queriesStartInColliders = !!i1187[19]
  i1186.callbacksOnDisable = !!i1187[20]
  i1186.reuseCollisionCallbacks = !!i1187[21]
  i1186.autoSyncTransforms = !!i1187[22]
  var i1189 = i1187[23]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1189[i + 0]) );
  }
  i1186.collisionMatrix = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1193 = data
  i1192.enabled = !!i1193[0]
  i1192.layerId = i1193[1]
  i1192.otherLayerId = i1193[2]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1195 = data
  var i1197 = i1195[0]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1197[i + 0]) );
  }
  i1194.qualityLevels = i1196
  var i1199 = i1195[1]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1194.names = i1198
  i1194.shadows = i1195[2]
  i1194.anisotropicFiltering = i1195[3]
  i1194.antiAliasing = i1195[4]
  i1194.lodBias = i1195[5]
  i1194.shadowCascades = i1195[6]
  i1194.shadowDistance = i1195[7]
  i1194.shadowmaskMode = i1195[8]
  i1194.shadowProjection = i1195[9]
  i1194.shadowResolution = i1195[10]
  i1194.softParticles = !!i1195[11]
  i1194.softVegetation = !!i1195[12]
  i1194.activeColorSpace = i1195[13]
  i1194.desiredColorSpace = i1195[14]
  i1194.masterTextureLimit = i1195[15]
  i1194.maxQueuedFrames = i1195[16]
  i1194.particleRaycastBudget = i1195[17]
  i1194.pixelLightCount = i1195[18]
  i1194.realtimeReflectionProbes = !!i1195[19]
  i1194.shadowCascade2Split = i1195[20]
  i1194.shadowCascade4Split = new pc.Vec3( i1195[21], i1195[22], i1195[23] )
  i1194.streamingMipmapsActive = !!i1195[24]
  i1194.vSyncCount = i1195[25]
  i1194.asyncUploadBufferSize = i1195[26]
  i1194.asyncUploadTimeSlice = i1195[27]
  i1194.billboardsFaceCameraPosition = !!i1195[28]
  i1194.shadowNearPlaneOffset = i1195[29]
  i1194.streamingMipmapsMemoryBudget = i1195[30]
  i1194.maximumLODLevel = i1195[31]
  i1194.streamingMipmapsAddAllCameras = !!i1195[32]
  i1194.streamingMipmapsMaxLevelReduction = i1195[33]
  i1194.streamingMipmapsRenderersPerFrame = i1195[34]
  i1194.resolutionScalingFixedDPIFactor = i1195[35]
  i1194.streamingMipmapsMaxFileIORequests = i1195[36]
  i1194.currentQualityLevel = i1195[37]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1205 = data
  i1204.weight = i1205[0]
  i1204.vertices = i1205[1]
  i1204.normals = i1205[2]
  i1204.tangents = i1205[3]
  return i1204
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1207 = data
  i1206.xPlacement = i1207[0]
  i1206.yPlacement = i1207[1]
  i1206.xAdvance = i1207[2]
  i1206.yAdvance = i1207[3]
  return i1206
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[9],"71":[22],"72":[28],"73":[28],"74":[28],"75":[28],"76":[28],"77":[28],"78":[28],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[22],"94":[5],"95":[96],"97":[96],"13":[12],"24":[22],"98":[99],"100":[12],"101":[12],"16":[13],"20":[19,12],"102":[12],"15":[13],"103":[12],"104":[12],"105":[12],"106":[12],"107":[12],"108":[12],"109":[12],"110":[12],"111":[12],"112":[19,12],"113":[12],"114":[12],"115":[12],"116":[12],"117":[19,12],"118":[12],"119":[29],"120":[29],"30":[29],"121":[29],"122":[22],"123":[22],"124":[99],"125":[12],"126":[5,12],"44":[12,19],"127":[12],"128":[19,12],"129":[5],"130":[19,12],"131":[12],"132":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Tree","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","Wall","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","AdaptiveCameraPosition","UnityEngine.Light","Conveyor","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BuildManager","UnityEngine.UI.Button","UnityEngine.GameObject","MoneyController","CharactersMover","SimplePoint","LoadPoint","UnloadPoint","Forklift","Garage","ChopperManager","Chopper","ButtonLight","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Build","Truck","MoneyBalance","MoneyFlyAnimation","TruckManager","TruckUnloadPoint","TruckMover","GameManager","SimpleAudioManager","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "13.2";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Lumber";

Deserializers.lunaAppID = "0";

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

Deserializers.buildID = "ee0099a8-d841-43ed-bd55-9e195e096bd2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

