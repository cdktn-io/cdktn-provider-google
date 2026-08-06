# `netappStoragePool` Submodule <a name="`netappStoragePool` Submodule" id="@cdktn/provider-google.netappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappStoragePool <a name="NetappStoragePool" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetappStoragePool(Construct Scope, string Id, NetappStoragePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering">ResetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled">ResetCustomPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetEnableHotTierAutoResize">ResetEnableHotTierAutoResize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetHotTierSizeGib">ResetHotTierSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig">ResetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled">ResetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetQosType">ResetQosType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone">ResetReplicaZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetScaleType">ResetScaleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops">ResetTotalIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps">ResetTotalThroughputMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappStoragePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetAllowAutoTiering` <a name="ResetAllowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering"></a>

```csharp
private void ResetAllowAutoTiering()
```

##### `ResetCustomPerformanceEnabled` <a name="ResetCustomPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled"></a>

```csharp
private void ResetCustomPerformanceEnabled()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableHotTierAutoResize` <a name="ResetEnableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetEnableHotTierAutoResize"></a>

```csharp
private void ResetEnableHotTierAutoResize()
```

##### `ResetHotTierSizeGib` <a name="ResetHotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetHotTierSizeGib"></a>

```csharp
private void ResetHotTierSizeGib()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsConfig` <a name="ResetKmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig"></a>

```csharp
private void ResetKmsConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLdapEnabled` <a name="ResetLdapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled"></a>

```csharp
private void ResetLdapEnabled()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQosType` <a name="ResetQosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetQosType"></a>

```csharp
private void ResetQosType()
```

##### `ResetReplicaZone` <a name="ResetReplicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone"></a>

```csharp
private void ResetReplicaZone()
```

##### `ResetScaleType` <a name="ResetScaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetScaleType"></a>

```csharp
private void ResetScaleType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTotalIops` <a name="ResetTotalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops"></a>

```csharp
private void ResetTotalIops()
```

##### `ResetTotalThroughputMibps` <a name="ResetTotalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps"></a>

```csharp
private void ResetTotalThroughputMibps()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetappStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetappStoragePool.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetappStoragePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetappStoragePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetappStoragePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetappStoragePool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappStoragePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.availableThroughputMibps">AvailableThroughputMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.coldTierSizeUsedGib">ColdTierSizeUsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeUsedGib">HotTierSizeUsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib">VolumeCapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount">VolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput">AllowAutoTieringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput">CapacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput">CustomPerformanceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResizeInput">EnableHotTierAutoResizeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGibInput">HotTierSizeGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput">KmsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput">LdapEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosTypeInput">QosTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput">ReplicaZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleTypeInput">ScaleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput">TotalIopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput">TotalThroughputMibpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib">CapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled">CustomPerformanceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResize">EnableHotTierAutoResize</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGib">HotTierSizeGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled">LdapEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosType">QosType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone">ReplicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleType">ScaleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIops">TotalIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps">TotalThroughputMibps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailableThroughputMibps`<sup>Required</sup> <a name="AvailableThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.availableThroughputMibps"></a>

```csharp
public double AvailableThroughputMibps { get; }
```

- *Type:* double

---

##### `ColdTierSizeUsedGib`<sup>Required</sup> <a name="ColdTierSizeUsedGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.coldTierSizeUsedGib"></a>

```csharp
public string ColdTierSizeUsedGib { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `HotTierSizeUsedGib`<sup>Required</sup> <a name="HotTierSizeUsedGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeUsedGib"></a>

```csharp
public string HotTierSizeUsedGib { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeouts"></a>

```csharp
public NetappStoragePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a>

---

##### `VolumeCapacityGib`<sup>Required</sup> <a name="VolumeCapacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib"></a>

```csharp
public string VolumeCapacityGib { get; }
```

- *Type:* string

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount"></a>

```csharp
public double VolumeCount { get; }
```

- *Type:* double

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput"></a>

```csharp
public string ActiveDirectoryInput { get; }
```

- *Type:* string

---

##### `AllowAutoTieringInput`<sup>Optional</sup> <a name="AllowAutoTieringInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput"></a>

```csharp
public bool|IResolvable AllowAutoTieringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput"></a>

```csharp
public string CapacityGibInput { get; }
```

- *Type:* string

---

##### `CustomPerformanceEnabledInput`<sup>Optional</sup> <a name="CustomPerformanceEnabledInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput"></a>

```csharp
public bool|IResolvable CustomPerformanceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableHotTierAutoResizeInput`<sup>Optional</sup> <a name="EnableHotTierAutoResizeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResizeInput"></a>

```csharp
public bool|IResolvable EnableHotTierAutoResizeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HotTierSizeGibInput`<sup>Optional</sup> <a name="HotTierSizeGibInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGibInput"></a>

```csharp
public string HotTierSizeGibInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsConfigInput`<sup>Optional</sup> <a name="KmsConfigInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput"></a>

```csharp
public string KmsConfigInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapEnabledInput`<sup>Optional</sup> <a name="LdapEnabledInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput"></a>

```csharp
public bool|IResolvable LdapEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QosTypeInput`<sup>Optional</sup> <a name="QosTypeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosTypeInput"></a>

```csharp
public string QosTypeInput { get; }
```

- *Type:* string

---

##### `ReplicaZoneInput`<sup>Optional</sup> <a name="ReplicaZoneInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput"></a>

```csharp
public string ReplicaZoneInput { get; }
```

- *Type:* string

---

##### `ScaleTypeInput`<sup>Optional</sup> <a name="ScaleTypeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleTypeInput"></a>

```csharp
public string ScaleTypeInput { get; }
```

- *Type:* string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput"></a>

```csharp
public string ServiceLevelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput"></a>

```csharp
public IResolvable|NetappStoragePoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `TotalIopsInput`<sup>Optional</sup> <a name="TotalIopsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput"></a>

```csharp
public string TotalIopsInput { get; }
```

- *Type:* string

---

##### `TotalThroughputMibpsInput`<sup>Optional</sup> <a name="TotalThroughputMibpsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput"></a>

```csharp
public string TotalThroughputMibpsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; }
```

- *Type:* string

---

##### `AllowAutoTiering`<sup>Required</sup> <a name="AllowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering"></a>

```csharp
public bool|IResolvable AllowAutoTiering { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib"></a>

```csharp
public string CapacityGib { get; }
```

- *Type:* string

---

##### `CustomPerformanceEnabled`<sup>Required</sup> <a name="CustomPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled"></a>

```csharp
public bool|IResolvable CustomPerformanceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableHotTierAutoResize`<sup>Required</sup> <a name="EnableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResize"></a>

```csharp
public bool|IResolvable EnableHotTierAutoResize { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HotTierSizeGib`<sup>Required</sup> <a name="HotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGib"></a>

```csharp
public string HotTierSizeGib { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled"></a>

```csharp
public bool|IResolvable LdapEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QosType`<sup>Required</sup> <a name="QosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosType"></a>

```csharp
public string QosType { get; }
```

- *Type:* string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone"></a>

```csharp
public string ReplicaZone { get; }
```

- *Type:* string

---

##### `ScaleType`<sup>Required</sup> <a name="ScaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleType"></a>

```csharp
public string ScaleType { get; }
```

- *Type:* string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `TotalIops`<sup>Required</sup> <a name="TotalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIops"></a>

```csharp
public string TotalIops { get; }
```

- *Type:* string

---

##### `TotalThroughputMibps`<sup>Required</sup> <a name="TotalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps"></a>

```csharp
public string TotalThroughputMibps { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappStoragePoolConfig <a name="NetappStoragePoolConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetappStoragePoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CapacityGib,
    string Location,
    string Name,
    string Network,
    string ServiceLevel,
    string ActiveDirectory = null,
    bool|IResolvable AllowAutoTiering = null,
    bool|IResolvable CustomPerformanceEnabled = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable EnableHotTierAutoResize = null,
    string HotTierSizeGib = null,
    string Id = null,
    string KmsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    bool|IResolvable LdapEnabled = null,
    string Mode = null,
    string Project = null,
    string QosType = null,
    string ReplicaZone = null,
    string ScaleType = null,
    NetappStoragePoolTimeouts Timeouts = null,
    string TotalIops = null,
    string TotalThroughputMibps = null,
    string Type = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib">CapacityGib</a></code> | <code>string</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location">Location</a></code> | <code>string</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network">Network</a></code> | <code>string</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled">CustomPerformanceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.enableHotTierAutoResize">EnableHotTierAutoResize</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.hotTierSizeGib">HotTierSizeGib</a></code> | <code>string</code> | Total hot tier capacity for the Storage Pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled">LdapEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.mode">Mode</a></code> | <code>string</code> | Mode of the storage pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.qosType">QosType</a></code> | <code>string</code> | QoS (Quality of Service) type of the storage pool. Possible values are: AUTO, MANUAL. Possible values: ["QOS_TYPE_UNSPECIFIED", "AUTO", "MANUAL"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone">ReplicaZone</a></code> | <code>string</code> | Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.scaleType">ScaleType</a></code> | <code>string</code> | The scale type of the storage pool. Defaults to 'SCALE_TYPE_DEFAULT' if not specified. Possible values: ["SCALE_TYPE_UNSPECIFIED", "SCALE_TYPE_DEFAULT", "SCALE_TYPE_SCALEOUT"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops">TotalIops</a></code> | <code>string</code> | Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps">TotalThroughputMibps</a></code> | <code>string</code> | Optional. Custom Performance Total Throughput of the pool (in MiB/s). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.type">Type</a></code> | <code>string</code> | Type of the storage pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone">Zone</a></code> | <code>string</code> | Specifies the active zone for regional Flex pools. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib"></a>

```csharp
public string CapacityGib { get; set; }
```

- *Type:* string

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; set; }
```

- *Type:* string

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; set; }
```

- *Type:* string

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `AllowAutoTiering`<sup>Optional</sup> <a name="AllowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering"></a>

```csharp
public bool|IResolvable AllowAutoTiering { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}

---

##### `CustomPerformanceEnabled`<sup>Optional</sup> <a name="CustomPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled"></a>

```csharp
public bool|IResolvable CustomPerformanceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#custom_performance_enabled NetappStoragePool#custom_performance_enabled}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#deletion_policy NetappStoragePool#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `EnableHotTierAutoResize`<sup>Optional</sup> <a name="EnableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.enableHotTierAutoResize"></a>

```csharp
public bool|IResolvable EnableHotTierAutoResize { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%.

Default is true.
The increment will kick in only if the new size after increment is still less than or equal to storage pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#enable_hot_tier_auto_resize NetappStoragePool#enable_hot_tier_auto_resize}

---

##### `HotTierSizeGib`<sup>Optional</sup> <a name="HotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.hotTierSizeGib"></a>

```csharp
public string HotTierSizeGib { get; set; }
```

- *Type:* string

Total hot tier capacity for the Storage Pool.

It is applicable only to Flex service level.
It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#hot_tier_size_gib NetappStoragePool#hot_tier_size_gib}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsConfig`<sup>Optional</sup> <a name="KmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; set; }
```

- *Type:* string

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `LdapEnabled`<sup>Optional</sup> <a name="LdapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled"></a>

```csharp
public bool|IResolvable LdapEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Mode of the storage pool.

The operational mode of the storage pool. ONTAP mode enables operations
via ONTAP Mode APIs, while DEFAULT mode enables operations via NetApp Volumes APIs.
If not specified during creation, the mode defaults to DEFAULT. Possible values: ["MODE_UNSPECIFIED", "DEFAULT", "ONTAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#mode NetappStoragePool#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `QosType`<sup>Optional</sup> <a name="QosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.qosType"></a>

```csharp
public string QosType { get; set; }
```

- *Type:* string

QoS (Quality of Service) type of the storage pool. Possible values are: AUTO, MANUAL. Possible values: ["QOS_TYPE_UNSPECIFIED", "AUTO", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#qos_type NetappStoragePool#qos_type}

---

##### `ReplicaZone`<sup>Optional</sup> <a name="ReplicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone"></a>

```csharp
public string ReplicaZone { get; set; }
```

- *Type:* string

Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#replica_zone NetappStoragePool#replica_zone}

---

##### `ScaleType`<sup>Optional</sup> <a name="ScaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.scaleType"></a>

```csharp
public string ScaleType { get; set; }
```

- *Type:* string

The scale type of the storage pool. Defaults to 'SCALE_TYPE_DEFAULT' if not specified. Possible values: ["SCALE_TYPE_UNSPECIFIED", "SCALE_TYPE_DEFAULT", "SCALE_TYPE_SCALEOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#scale_type NetappStoragePool#scale_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts"></a>

```csharp
public NetappStoragePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

##### `TotalIops`<sup>Optional</sup> <a name="TotalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops"></a>

```csharp
public string TotalIops { get; set; }
```

- *Type:* string

Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#total_iops NetappStoragePool#total_iops}

---

##### `TotalThroughputMibps`<sup>Optional</sup> <a name="TotalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps"></a>

```csharp
public string TotalThroughputMibps { get; set; }
```

- *Type:* string

Optional. Custom Performance Total Throughput of the pool (in MiB/s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#total_throughput_mibps NetappStoragePool#total_throughput_mibps}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the storage pool.

This field is used to control whether the pool supports FILE based volumes only or UNIFIED (both FILE and BLOCK) volumes.
If not specified during creation, it defaults to FILE. Possible values: ["STORAGE_POOL_TYPE_UNSPECIFIED", "FILE", "UNIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#type NetappStoragePool#type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Specifies the active zone for regional Flex pools.

'zone' and 'replica_zone' values can be swapped to initiate a
[zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#zone NetappStoragePool#zone}

---

### NetappStoragePoolTimeouts <a name="NetappStoragePoolTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetappStoragePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappStoragePoolTimeoutsOutputReference <a name="NetappStoragePoolTimeoutsOutputReference" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetappStoragePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappStoragePoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---



