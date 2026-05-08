# `filestoreInstance` Submodule <a name="`filestoreInstance` Submodule" id="@cdktn/provider-google.filestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FilestoreInstance <a name="FilestoreInstance" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstance(Construct Scope, string Id, FilestoreInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putDirectoryServices">PutDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putFileShares">PutFileShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication">PutInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig">PutPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionReason">ResetDeletionProtectionReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDesiredReplicaState">ResetDesiredReplicaState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDirectoryServices">ResetDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetInitialReplication">ResetInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetPerformanceConfig">ResetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDirectoryServices` <a name="PutDirectoryServices" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putDirectoryServices"></a>

```csharp
private void PutDirectoryServices(FilestoreInstanceDirectoryServices Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putDirectoryServices.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a>

---

##### `PutFileShares` <a name="PutFileShares" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putFileShares"></a>

```csharp
private void PutFileShares(FilestoreInstanceFileShares Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `PutInitialReplication` <a name="PutInitialReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication"></a>

```csharp
private void PutInitialReplication(FilestoreInstanceInitialReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putInitialReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putNetworks"></a>

```csharp
private void PutNetworks(IResolvable|FilestoreInstanceNetworks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---

##### `PutPerformanceConfig` <a name="PutPerformanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig"></a>

```csharp
private void PutPerformanceConfig(FilestoreInstancePerformanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(FilestoreInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetDeletionProtectionReason` <a name="ResetDeletionProtectionReason" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDeletionProtectionReason"></a>

```csharp
private void ResetDeletionProtectionReason()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredReplicaState` <a name="ResetDesiredReplicaState" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDesiredReplicaState"></a>

```csharp
private void ResetDesiredReplicaState()
```

##### `ResetDirectoryServices` <a name="ResetDirectoryServices" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetDirectoryServices"></a>

```csharp
private void ResetDirectoryServices()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialReplication` <a name="ResetInitialReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetInitialReplication"></a>

```csharp
private void ResetInitialReplication()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPerformanceConfig` <a name="ResetPerformanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetPerformanceConfig"></a>

```csharp
private void ResetPerformanceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FilestoreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

FilestoreInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

FilestoreInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

FilestoreInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

FilestoreInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FilestoreInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FilestoreInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.directoryServices">DirectoryServices</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference">FilestoreInstanceDirectoryServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.effectiveReplication">EffectiveReplication</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList">FilestoreInstanceEffectiveReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fileShares">FileShares</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.initialReplication">InitialReplication</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference">FilestoreInstanceInitialReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.networks">Networks</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference">FilestoreInstancePerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReasonInput">DeletionProtectionReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.desiredReplicaStateInput">DesiredReplicaStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.directoryServicesInput">DirectoryServicesInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput">FileSharesInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.initialReplicationInput">InitialReplicationInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.networksInput">NetworksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfigInput">PerformanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReason">DeletionProtectionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.desiredReplicaState">DesiredReplicaState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DirectoryServices`<sup>Required</sup> <a name="DirectoryServices" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.directoryServices"></a>

```csharp
public FilestoreInstanceDirectoryServicesOutputReference DirectoryServices { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference">FilestoreInstanceDirectoryServicesOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveReplication`<sup>Required</sup> <a name="EffectiveReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.effectiveReplication"></a>

```csharp
public FilestoreInstanceEffectiveReplicationList EffectiveReplication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList">FilestoreInstanceEffectiveReplicationList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fileShares"></a>

```csharp
public FilestoreInstanceFileSharesOutputReference FileShares { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a>

---

##### `InitialReplication`<sup>Required</sup> <a name="InitialReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.initialReplication"></a>

```csharp
public FilestoreInstanceInitialReplicationOutputReference InitialReplication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference">FilestoreInstanceInitialReplicationOutputReference</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.networks"></a>

```csharp
public FilestoreInstanceNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a>

---

##### `PerformanceConfig`<sup>Required</sup> <a name="PerformanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfig"></a>

```csharp
public FilestoreInstancePerformanceConfigOutputReference PerformanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference">FilestoreInstancePerformanceConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.timeouts"></a>

```csharp
public FilestoreInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtectionReasonInput`<sup>Optional</sup> <a name="DeletionProtectionReasonInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReasonInput"></a>

```csharp
public string DeletionProtectionReasonInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredReplicaStateInput`<sup>Optional</sup> <a name="DesiredReplicaStateInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.desiredReplicaStateInput"></a>

```csharp
public string DesiredReplicaStateInput { get; }
```

- *Type:* string

---

##### `DirectoryServicesInput`<sup>Optional</sup> <a name="DirectoryServicesInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.directoryServicesInput"></a>

```csharp
public FilestoreInstanceDirectoryServices DirectoryServicesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a>

---

##### `FileSharesInput`<sup>Optional</sup> <a name="FileSharesInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput"></a>

```csharp
public FilestoreInstanceFileShares FileSharesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialReplicationInput`<sup>Optional</sup> <a name="InitialReplicationInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.initialReplicationInput"></a>

```csharp
public FilestoreInstanceInitialReplication InitialReplicationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.networksInput"></a>

```csharp
public IResolvable|FilestoreInstanceNetworks[] NetworksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---

##### `PerformanceConfigInput`<sup>Optional</sup> <a name="PerformanceConfigInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.performanceConfigInput"></a>

```csharp
public FilestoreInstancePerformanceConfig PerformanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|FilestoreInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtectionReason`<sup>Required</sup> <a name="DeletionProtectionReason" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.deletionProtectionReason"></a>

```csharp
public string DeletionProtectionReason { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredReplicaState`<sup>Required</sup> <a name="DesiredReplicaState" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.desiredReplicaState"></a>

```csharp
public string DesiredReplicaState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FilestoreInstanceConfig <a name="FilestoreInstanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    FilestoreInstanceFileShares FileShares,
    string Name,
    IResolvable|FilestoreInstanceNetworks[] Networks,
    string Tier,
    bool|IResolvable DeletionProtectionEnabled = null,
    string DeletionProtectionReason = null,
    string Description = null,
    string DesiredReplicaState = null,
    FilestoreInstanceDirectoryServices DirectoryServices = null,
    string Id = null,
    FilestoreInstanceInitialReplication InitialReplication = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    FilestoreInstancePerformanceConfig PerformanceConfig = null,
    string Project = null,
    string Protocol = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FilestoreInstanceTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares">FileShares</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks">Networks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier">Tier</a></code> | <code>string</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the instance is protected against deletion. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionReason">DeletionProtectionReason</a></code> | <code>string</code> | The reason for enabling deletion protection. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description">Description</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.desiredReplicaState">DesiredReplicaState</a></code> | <code>string</code> | The desired_replica_state field controls the state of a replica. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.directoryServices">DirectoryServices</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a></code> | directory_services block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#id FilestoreInstance#id}. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.initialReplication">InitialReplication</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | initial_replication block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location">Location</a></code> | <code>string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#project FilestoreInstance#project}. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.protocol">Protocol</a></code> | <code>string</code> | Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone">Zone</a></code> | <code>string</code> | The name of the Filestore zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares"></a>

```csharp
public FilestoreInstanceFileShares FileShares { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#file_shares FilestoreInstance#file_shares}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks"></a>

```csharp
public IResolvable|FilestoreInstanceNetworks[] Networks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#networks FilestoreInstance#networks}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#tier FilestoreInstance#tier}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the instance is protected against deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#deletion_protection_enabled FilestoreInstance#deletion_protection_enabled}

---

##### `DeletionProtectionReason`<sup>Optional</sup> <a name="DeletionProtectionReason" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.deletionProtectionReason"></a>

```csharp
public string DeletionProtectionReason { get; set; }
```

- *Type:* string

The reason for enabling deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#deletion_protection_reason FilestoreInstance#deletion_protection_reason}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#description FilestoreInstance#description}

---

##### `DesiredReplicaState`<sup>Optional</sup> <a name="DesiredReplicaState" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.desiredReplicaState"></a>

```csharp
public string DesiredReplicaState { get; set; }
```

- *Type:* string

The desired_replica_state field controls the state of a replica.

Terraform will attempt to make the actual state of the replica match the desired state. Default value: "READY" Possible values: ["PAUSED", "READY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#desired_replica_state FilestoreInstance#desired_replica_state}

---

##### `DirectoryServices`<sup>Optional</sup> <a name="DirectoryServices" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.directoryServices"></a>

```csharp
public FilestoreInstanceDirectoryServices DirectoryServices { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a>

directory_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#directory_services FilestoreInstance#directory_services}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#id FilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialReplication`<sup>Optional</sup> <a name="InitialReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.initialReplication"></a>

```csharp
public FilestoreInstanceInitialReplication InitialReplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

initial_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#initial_replication FilestoreInstance#initial_replication}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#labels FilestoreInstance#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#location FilestoreInstance#location}

---

##### `PerformanceConfig`<sup>Optional</sup> <a name="PerformanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.performanceConfig"></a>

```csharp
public FilestoreInstancePerformanceConfig PerformanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#performance_config FilestoreInstance#performance_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#project FilestoreInstance#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#protocol FilestoreInstance#protocol}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys
and values have the same definition as resource manager
tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is
ignored when empty. The field is immutable and causes
resource replacement when mutated. This field is only set
at create time and modifying this field after creation
will trigger recreation. To apply tags to an existing
resource, see the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#tags FilestoreInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts"></a>

```csharp
public FilestoreInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#timeouts FilestoreInstance#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#zone FilestoreInstance#zone}

---

### FilestoreInstanceDirectoryServices <a name="FilestoreInstanceDirectoryServices" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceDirectoryServices {
    FilestoreInstanceDirectoryServicesLdap Ldap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices.property.ldap">Ldap</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a></code> | ldap block. |

---

##### `Ldap`<sup>Optional</sup> <a name="Ldap" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices.property.ldap"></a>

```csharp
public FilestoreInstanceDirectoryServicesLdap Ldap { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a>

ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#ldap FilestoreInstance#ldap}

---

### FilestoreInstanceDirectoryServicesLdap <a name="FilestoreInstanceDirectoryServicesLdap" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceDirectoryServicesLdap {
    string Domain,
    string[] Servers,
    string GroupsOu = null,
    string UsersOu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.domain">Domain</a></code> | <code>string</code> | The LDAP domain name in the format of 'my-domain.com'. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.servers">Servers</a></code> | <code>string[]</code> | The servers names are used for specifying the LDAP servers names. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.groupsOu">GroupsOu</a></code> | <code>string</code> | The groups Organizational Unit (OU) is optional. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.usersOu">UsersOu</a></code> | <code>string</code> | The users Organizational Unit (OU) is optional. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The LDAP domain name in the format of 'my-domain.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#domain FilestoreInstance#domain}

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.servers"></a>

```csharp
public string[] Servers { get; set; }
```

- *Type:* string[]

The servers names are used for specifying the LDAP servers names.

The LDAP servers names can come with two formats:

1. DNS name, for example: 'ldap.example1.com', 'ldap.example2.com'.
2. IP address, for example: '10.0.0.1', '10.0.0.2', '10.0.0.3'.
   All servers names must be in the same format: either all DNS names or all
   IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#servers FilestoreInstance#servers}

---

##### `GroupsOu`<sup>Optional</sup> <a name="GroupsOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.groupsOu"></a>

```csharp
public string GroupsOu { get; set; }
```

- *Type:* string

The groups Organizational Unit (OU) is optional.

This parameter is a hint
to allow faster lookup in the LDAP namespace. In case that this parameter
is not provided, Filestore instance will query the whole LDAP namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#groups_ou FilestoreInstance#groups_ou}

---

##### `UsersOu`<sup>Optional</sup> <a name="UsersOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap.property.usersOu"></a>

```csharp
public string UsersOu { get; set; }
```

- *Type:* string

The users Organizational Unit (OU) is optional.

This parameter is a hint
to allow faster lookup in the LDAP namespace. In case that this parameter
is not provided, Filestore instance will query the whole LDAP namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#users_ou FilestoreInstance#users_ou}

---

### FilestoreInstanceEffectiveReplication <a name="FilestoreInstanceEffectiveReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplication {

};
```


### FilestoreInstanceEffectiveReplicationReplicas <a name="FilestoreInstanceEffectiveReplicationReplicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplicationReplicas {

};
```


### FilestoreInstanceFileShares <a name="FilestoreInstanceFileShares" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceFileShares {
    double CapacityGb,
    string Name,
    IResolvable|FilestoreInstanceFileSharesNfsExportOptions[] NfsExportOptions = null,
    string SourceBackup = null,
    string SourceBackupdrBackup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb">CapacityGb</a></code> | <code>double</code> | File share capacity in GiB. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name">Name</a></code> | <code>string</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions">NfsExportOptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | nfs_export_options block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackupdrBackup">SourceBackupdrBackup</a></code> | <code>string</code> | The resource name of the BackupDR backup, in the format 'projects/{project_id}/locations/{location_id}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backup_id}', that this file share has been restored from. |

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb"></a>

```csharp
public double CapacityGb { get; set; }
```

- *Type:* double

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#name FilestoreInstance#name}

---

##### `NfsExportOptions`<sup>Optional</sup> <a name="NfsExportOptions" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions"></a>

```csharp
public IResolvable|FilestoreInstanceFileSharesNfsExportOptions[] NfsExportOptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; set; }
```

- *Type:* string

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#source_backup FilestoreInstance#source_backup}

---

##### `SourceBackupdrBackup`<sup>Optional</sup> <a name="SourceBackupdrBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.sourceBackupdrBackup"></a>

```csharp
public string SourceBackupdrBackup { get; set; }
```

- *Type:* string

The resource name of the BackupDR backup, in the format 'projects/{project_id}/locations/{location_id}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backup_id}', that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#source_backupdr_backup FilestoreInstance#source_backupdr_backup}

---

### FilestoreInstanceFileSharesNfsExportOptions <a name="FilestoreInstanceFileSharesNfsExportOptions" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceFileSharesNfsExportOptions {
    string AccessMode = null,
    double AnonGid = null,
    double AnonUid = null,
    string[] IpRanges = null,
    string Network = null,
    string SquashMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode">AccessMode</a></code> | <code>string</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid">AnonGid</a></code> | <code>double</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid">AnonUid</a></code> | <code>double</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">IpRanges</a></code> | <code>string[]</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.network">Network</a></code> | <code>string</code> | The source VPC network for 'ip_ranges'. Required for instances using Private Service Connect, optional otherwise. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode">SquashMode</a></code> | <code>string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#access_mode FilestoreInstance#access_mode}

---

##### `AnonGid`<sup>Optional</sup> <a name="AnonGid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```csharp
public double AnonGid { get; set; }
```

- *Type:* double

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#anon_gid FilestoreInstance#anon_gid}

---

##### `AnonUid`<sup>Optional</sup> <a name="AnonUid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```csharp
public double AnonUid { get; set; }
```

- *Type:* double

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#anon_uid FilestoreInstance#anon_uid}

---

##### `IpRanges`<sup>Optional</sup> <a name="IpRanges" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```csharp
public string[] IpRanges { get; set; }
```

- *Type:* string[]

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The source VPC network for 'ip_ranges'. Required for instances using Private Service Connect, optional otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#network FilestoreInstance#network}

---

##### `SquashMode`<sup>Optional</sup> <a name="SquashMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```csharp
public string SquashMode { get; set; }
```

- *Type:* string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#squash_mode FilestoreInstance#squash_mode}

---

### FilestoreInstanceInitialReplication <a name="FilestoreInstanceInitialReplication" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceInitialReplication {
    IResolvable|FilestoreInstanceInitialReplicationReplicas[] Replicas = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.replicas">Replicas</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | replicas block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.role">Role</a></code> | <code>string</code> | The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"]. |

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.replicas"></a>

```csharp
public IResolvable|FilestoreInstanceInitialReplicationReplicas[] Replicas { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#replicas FilestoreInstance#replicas}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#role FilestoreInstance#role}

---

### FilestoreInstanceInitialReplicationReplicas <a name="FilestoreInstanceInitialReplicationReplicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceInitialReplicationReplicas {
    string PeerInstance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.property.peerInstance">PeerInstance</a></code> | <code>string</code> | The peer instance. |

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas.property.peerInstance"></a>

```csharp
public string PeerInstance { get; set; }
```

- *Type:* string

The peer instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#peer_instance FilestoreInstance#peer_instance}

---

### FilestoreInstanceNetworks <a name="FilestoreInstanceNetworks" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceNetworks {
    string[] Modes,
    string Network,
    string ConnectMode = null,
    FilestoreInstanceNetworksPscConfig PscConfig = null,
    string ReservedIpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes">Modes</a></code> | <code>string[]</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network">Network</a></code> | <code>string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode">ConnectMode</a></code> | <code>string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes"></a>

```csharp
public string[] Modes { get; set; }
```

- *Type:* string[]

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#modes FilestoreInstance#modes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#network FilestoreInstance#network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode"></a>

```csharp
public string ConnectMode { get; set; }
```

- *Type:* string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#connect_mode FilestoreInstance#connect_mode}

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.pscConfig"></a>

```csharp
public FilestoreInstanceNetworksPscConfig PscConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#psc_config FilestoreInstance#psc_config}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; set; }
```

- *Type:* string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}

---

### FilestoreInstanceNetworksPscConfig <a name="FilestoreInstanceNetworksPscConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceNetworksPscConfig {
    string EndpointProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig.property.endpointProject">EndpointProject</a></code> | <code>string</code> | Consumer service project in which the Private Service Connect endpoint would be set up. |

---

##### `EndpointProject`<sup>Optional</sup> <a name="EndpointProject" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig.property.endpointProject"></a>

```csharp
public string EndpointProject { get; set; }
```

- *Type:* string

Consumer service project in which the Private Service Connect endpoint would be set up.

This is optional, and only relevant in case the network
is a shared VPC. If this is not specified, the endpoint would be set up
in the VPC host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#endpoint_project FilestoreInstance#endpoint_project}

---

### FilestoreInstancePerformanceConfig <a name="FilestoreInstancePerformanceConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfig {
    FilestoreInstancePerformanceConfigFixedIops FixedIops = null,
    FilestoreInstancePerformanceConfigIopsPerTb IopsPerTb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.fixedIops">FixedIops</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | fixed_iops block. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.iopsPerTb">IopsPerTb</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | iops_per_tb block. |

---

##### `FixedIops`<sup>Optional</sup> <a name="FixedIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.fixedIops"></a>

```csharp
public FilestoreInstancePerformanceConfigFixedIops FixedIops { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

fixed_iops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#fixed_iops FilestoreInstance#fixed_iops}

---

##### `IopsPerTb`<sup>Optional</sup> <a name="IopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig.property.iopsPerTb"></a>

```csharp
public FilestoreInstancePerformanceConfigIopsPerTb IopsPerTb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

iops_per_tb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#iops_per_tb FilestoreInstance#iops_per_tb}

---

### FilestoreInstancePerformanceConfigFixedIops <a name="FilestoreInstancePerformanceConfigFixedIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfigFixedIops {
    double MaxIops = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.property.maxIops">MaxIops</a></code> | <code>double</code> | The number of IOPS to provision for the instance. max_iops must be in multiple of 1000. |

---

##### `MaxIops`<sup>Optional</sup> <a name="MaxIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops.property.maxIops"></a>

```csharp
public double MaxIops { get; set; }
```

- *Type:* double

The number of IOPS to provision for the instance. max_iops must be in multiple of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#max_iops FilestoreInstance#max_iops}

---

### FilestoreInstancePerformanceConfigIopsPerTb <a name="FilestoreInstancePerformanceConfigIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfigIopsPerTb {
    double MaxIopsPerTb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb">MaxIopsPerTb</a></code> | <code>double</code> | The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000. |

---

##### `MaxIopsPerTb`<sup>Optional</sup> <a name="MaxIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb"></a>

```csharp
public double MaxIopsPerTb { get; set; }
```

- *Type:* double

The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000.

The instance max IOPS
will be changed dynamically based on the instance
capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#max_iops_per_tb FilestoreInstance#max_iops_per_tb}

---

### FilestoreInstanceTimeouts <a name="FilestoreInstanceTimeouts" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#create FilestoreInstance#create}. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#update FilestoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#create FilestoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#delete FilestoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/filestore_instance#update FilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FilestoreInstanceDirectoryServicesLdapOutputReference <a name="FilestoreInstanceDirectoryServicesLdapOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceDirectoryServicesLdapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resetGroupsOu">ResetGroupsOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resetUsersOu">ResetUsersOu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupsOu` <a name="ResetGroupsOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resetGroupsOu"></a>

```csharp
private void ResetGroupsOu()
```

##### `ResetUsersOu` <a name="ResetUsersOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.resetUsersOu"></a>

```csharp
private void ResetUsersOu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOuInput">GroupsOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.serversInput">ServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOuInput">UsersOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOu">GroupsOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOu">UsersOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `GroupsOuInput`<sup>Optional</sup> <a name="GroupsOuInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOuInput"></a>

```csharp
public string GroupsOuInput { get; }
```

- *Type:* string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.serversInput"></a>

```csharp
public string[] ServersInput { get; }
```

- *Type:* string[]

---

##### `UsersOuInput`<sup>Optional</sup> <a name="UsersOuInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOuInput"></a>

```csharp
public string UsersOuInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `GroupsOu`<sup>Required</sup> <a name="GroupsOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOu"></a>

```csharp
public string GroupsOu { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `UsersOu`<sup>Required</sup> <a name="UsersOu" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOu"></a>

```csharp
public string UsersOu { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceDirectoryServicesLdap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a>

---


### FilestoreInstanceDirectoryServicesOutputReference <a name="FilestoreInstanceDirectoryServicesOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceDirectoryServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.putLdap">PutLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.resetLdap">ResetLdap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLdap` <a name="PutLdap" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.putLdap"></a>

```csharp
private void PutLdap(FilestoreInstanceDirectoryServicesLdap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.putLdap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a>

---

##### `ResetLdap` <a name="ResetLdap" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.resetLdap"></a>

```csharp
private void ResetLdap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.ldap">Ldap</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference">FilestoreInstanceDirectoryServicesLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.ldapInput">LdapInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ldap`<sup>Required</sup> <a name="Ldap" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.ldap"></a>

```csharp
public FilestoreInstanceDirectoryServicesLdapOutputReference Ldap { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdapOutputReference">FilestoreInstanceDirectoryServicesLdapOutputReference</a>

---

##### `LdapInput`<sup>Optional</sup> <a name="LdapInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.ldapInput"></a>

```csharp
public FilestoreInstanceDirectoryServicesLdap LdapInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesLdap">FilestoreInstanceDirectoryServicesLdap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServicesOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceDirectoryServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceDirectoryServices">FilestoreInstanceDirectoryServices</a>

---


### FilestoreInstanceEffectiveReplicationList <a name="FilestoreInstanceEffectiveReplicationList" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get"></a>

```csharp
private FilestoreInstanceEffectiveReplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FilestoreInstanceEffectiveReplicationOutputReference <a name="FilestoreInstanceEffectiveReplicationOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList">FilestoreInstanceEffectiveReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication">FilestoreInstanceEffectiveReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.replicas"></a>

```csharp
public FilestoreInstanceEffectiveReplicationReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList">FilestoreInstanceEffectiveReplicationReplicasList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceEffectiveReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplication">FilestoreInstanceEffectiveReplication</a>

---


### FilestoreInstanceEffectiveReplicationReplicasList <a name="FilestoreInstanceEffectiveReplicationReplicasList" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplicationReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get"></a>

```csharp
private FilestoreInstanceEffectiveReplicationReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FilestoreInstanceEffectiveReplicationReplicasOutputReference <a name="FilestoreInstanceEffectiveReplicationReplicasOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceEffectiveReplicationReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime">LastActiveSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.peerInstance">PeerInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons">StateReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas">FilestoreInstanceEffectiveReplicationReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastActiveSyncTime`<sup>Required</sup> <a name="LastActiveSyncTime" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime"></a>

```csharp
public string LastActiveSyncTime { get; }
```

- *Type:* string

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.peerInstance"></a>

```csharp
public string PeerInstance { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReasons`<sup>Required</sup> <a name="StateReasons" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons"></a>

```csharp
public string[] StateReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceEffectiveReplicationReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceEffectiveReplicationReplicas">FilestoreInstanceEffectiveReplicationReplicas</a>

---


### FilestoreInstanceFileSharesNfsExportOptionsList <a name="FilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceFileSharesNfsExportOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```csharp
private FilestoreInstanceFileSharesNfsExportOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceFileSharesNfsExportOptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---


### FilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="FilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceFileSharesNfsExportOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">ResetAnonGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">ResetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">ResetIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">ResetSquashMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```csharp
private void ResetAccessMode()
```

##### `ResetAnonGid` <a name="ResetAnonGid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```csharp
private void ResetAnonGid()
```

##### `ResetAnonUid` <a name="ResetAnonUid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```csharp
private void ResetAnonUid()
```

##### `ResetIpRanges` <a name="ResetIpRanges" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```csharp
private void ResetIpRanges()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetSquashMode` <a name="ResetSquashMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```csharp
private void ResetSquashMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">AnonGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">AnonUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">IpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">AnonGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">AnonUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">IpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">SquashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AnonGidInput`<sup>Optional</sup> <a name="AnonGidInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```csharp
public double AnonGidInput { get; }
```

- *Type:* double

---

##### `AnonUidInput`<sup>Optional</sup> <a name="AnonUidInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```csharp
public double AnonUidInput { get; }
```

- *Type:* double

---

##### `IpRangesInput`<sup>Optional</sup> <a name="IpRangesInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```csharp
public string[] IpRangesInput { get; }
```

- *Type:* string[]

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```csharp
public string SquashModeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AnonGid`<sup>Required</sup> <a name="AnonGid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```csharp
public double AnonGid { get; }
```

- *Type:* double

---

##### `AnonUid`<sup>Required</sup> <a name="AnonUid" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```csharp
public double AnonUid { get; }
```

- *Type:* double

---

##### `IpRanges`<sup>Required</sup> <a name="IpRanges" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```csharp
public string[] IpRanges { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```csharp
public string SquashMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceFileSharesNfsExportOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>

---


### FilestoreInstanceFileSharesOutputReference <a name="FilestoreInstanceFileSharesOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceFileSharesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions">PutNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">ResetNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup">ResetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackupdrBackup">ResetSourceBackupdrBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfsExportOptions` <a name="PutNfsExportOptions" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```csharp
private void PutNfsExportOptions(IResolvable|FilestoreInstanceFileSharesNfsExportOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `ResetNfsExportOptions` <a name="ResetNfsExportOptions" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```csharp
private void ResetNfsExportOptions()
```

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackup"></a>

```csharp
private void ResetSourceBackup()
```

##### `ResetSourceBackupdrBackup` <a name="ResetSourceBackupdrBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetSourceBackupdrBackup"></a>

```csharp
private void ResetSourceBackupdrBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">NfsExportOptions</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput">CapacityGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">NfsExportOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupdrBackupInput">SourceBackupdrBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupdrBackup">SourceBackupdrBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NfsExportOptions`<sup>Required</sup> <a name="NfsExportOptions" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```csharp
public FilestoreInstanceFileSharesNfsExportOptionsList NfsExportOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `CapacityGbInput`<sup>Optional</sup> <a name="CapacityGbInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```csharp
public double CapacityGbInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NfsExportOptionsInput`<sup>Optional</sup> <a name="NfsExportOptionsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```csharp
public IResolvable|FilestoreInstanceFileSharesNfsExportOptions[] NfsExportOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions">FilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `SourceBackupdrBackupInput`<sup>Optional</sup> <a name="SourceBackupdrBackupInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupdrBackupInput"></a>

```csharp
public string SourceBackupdrBackupInput { get; }
```

- *Type:* string

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupInput"></a>

```csharp
public string SourceBackupInput { get; }
```

- *Type:* string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```csharp
public double CapacityGb { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; }
```

- *Type:* string

---

##### `SourceBackupdrBackup`<sup>Required</sup> <a name="SourceBackupdrBackup" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackupdrBackup"></a>

```csharp
public string SourceBackupdrBackup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceFileShares InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---


### FilestoreInstanceInitialReplicationOutputReference <a name="FilestoreInstanceInitialReplicationOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceInitialReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas">PutReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicas` <a name="PutReplicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas"></a>

```csharp
private void PutReplicas(IResolvable|FilestoreInstanceInitialReplicationReplicas[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.putReplicas.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList">FilestoreInstanceInitialReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicas"></a>

```csharp
public FilestoreInstanceInitialReplicationReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList">FilestoreInstanceInitialReplicationReplicasList</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.replicasInput"></a>

```csharp
public IResolvable|FilestoreInstanceInitialReplicationReplicas[] ReplicasInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceInitialReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplication">FilestoreInstanceInitialReplication</a>

---


### FilestoreInstanceInitialReplicationReplicasList <a name="FilestoreInstanceInitialReplicationReplicasList" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceInitialReplicationReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get"></a>

```csharp
private FilestoreInstanceInitialReplicationReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasList.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceInitialReplicationReplicas[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>[]

---


### FilestoreInstanceInitialReplicationReplicasOutputReference <a name="FilestoreInstanceInitialReplicationReplicasOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceInitialReplicationReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput">PeerInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance">PeerInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeerInstanceInput`<sup>Optional</sup> <a name="PeerInstanceInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput"></a>

```csharp
public string PeerInstanceInput { get; }
```

- *Type:* string

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance"></a>

```csharp
public string PeerInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceInitialReplicationReplicas InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceInitialReplicationReplicas">FilestoreInstanceInitialReplicationReplicas</a>

---


### FilestoreInstanceNetworksList <a name="FilestoreInstanceNetworksList" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get"></a>

```csharp
private FilestoreInstanceNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceNetworks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>[]

---


### FilestoreInstanceNetworksOutputReference <a name="FilestoreInstanceNetworksOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode">ResetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.putPscConfig"></a>

```csharp
private void PutPscConfig(FilestoreInstanceNetworksPscConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a>

---

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```csharp
private void ResetConnectMode()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetPscConfig"></a>

```csharp
private void ResetPscConfig()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```csharp
private void ResetReservedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference">FilestoreInstanceNetworksPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput">ConnectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput">ModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode">ConnectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes">Modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.pscConfig"></a>

```csharp
public FilestoreInstanceNetworksPscConfigOutputReference PscConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference">FilestoreInstanceNetworksPscConfigOutputReference</a>

---

##### `ConnectModeInput`<sup>Optional</sup> <a name="ConnectModeInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```csharp
public string ConnectModeInput { get; }
```

- *Type:* string

---

##### `ModesInput`<sup>Optional</sup> <a name="ModesInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```csharp
public string[] ModesInput { get; }
```

- *Type:* string[]

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.pscConfigInput"></a>

```csharp
public FilestoreInstanceNetworksPscConfig PscConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a>

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```csharp
public string ReservedIpRangeInput { get; }
```

- *Type:* string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```csharp
public string ConnectMode { get; }
```

- *Type:* string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes"></a>

```csharp
public string[] Modes { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceNetworks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworks">FilestoreInstanceNetworks</a>

---


### FilestoreInstanceNetworksPscConfigOutputReference <a name="FilestoreInstanceNetworksPscConfigOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceNetworksPscConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.resetEndpointProject">ResetEndpointProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointProject` <a name="ResetEndpointProject" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.resetEndpointProject"></a>

```csharp
private void ResetEndpointProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.endpointProjectInput">EndpointProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.endpointProject">EndpointProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointProjectInput`<sup>Optional</sup> <a name="EndpointProjectInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.endpointProjectInput"></a>

```csharp
public string EndpointProjectInput { get; }
```

- *Type:* string

---

##### `EndpointProject`<sup>Required</sup> <a name="EndpointProject" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.endpointProject"></a>

```csharp
public string EndpointProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfigOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstanceNetworksPscConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceNetworksPscConfig">FilestoreInstanceNetworksPscConfig</a>

---


### FilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="FilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfigFixedIopsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops">ResetMaxIops</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIops` <a name="ResetMaxIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops"></a>

```csharp
private void ResetMaxIops()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput">MaxIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops">MaxIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxIopsInput`<sup>Optional</sup> <a name="MaxIopsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput"></a>

```csharp
public double MaxIopsInput { get; }
```

- *Type:* double

---

##### `MaxIops`<sup>Required</sup> <a name="MaxIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops"></a>

```csharp
public double MaxIops { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstancePerformanceConfigFixedIops InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---


### FilestoreInstancePerformanceConfigIopsPerTbOutputReference <a name="FilestoreInstancePerformanceConfigIopsPerTbOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfigIopsPerTbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb">ResetMaxIopsPerTb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIopsPerTb` <a name="ResetMaxIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb"></a>

```csharp
private void ResetMaxIopsPerTb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput">MaxIopsPerTbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb">MaxIopsPerTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxIopsPerTbInput`<sup>Optional</sup> <a name="MaxIopsPerTbInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput"></a>

```csharp
public double MaxIopsPerTbInput { get; }
```

- *Type:* double

---

##### `MaxIopsPerTb`<sup>Required</sup> <a name="MaxIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb"></a>

```csharp
public double MaxIopsPerTb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstancePerformanceConfigIopsPerTb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---


### FilestoreInstancePerformanceConfigOutputReference <a name="FilestoreInstancePerformanceConfigOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstancePerformanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops">PutFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb">PutIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetFixedIops">ResetFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb">ResetIopsPerTb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedIops` <a name="PutFixedIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops"></a>

```csharp
private void PutFixedIops(FilestoreInstancePerformanceConfigFixedIops Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putFixedIops.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---

##### `PutIopsPerTb` <a name="PutIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb"></a>

```csharp
private void PutIopsPerTb(FilestoreInstancePerformanceConfigIopsPerTb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.putIopsPerTb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `ResetFixedIops` <a name="ResetFixedIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetFixedIops"></a>

```csharp
private void ResetFixedIops()
```

##### `ResetIopsPerTb` <a name="ResetIopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb"></a>

```csharp
private void ResetIopsPerTb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIops">FixedIops</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference">FilestoreInstancePerformanceConfigFixedIopsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb">IopsPerTb</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference">FilestoreInstancePerformanceConfigIopsPerTbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput">FixedIopsInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput">IopsPerTbInput</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedIops`<sup>Required</sup> <a name="FixedIops" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIops"></a>

```csharp
public FilestoreInstancePerformanceConfigFixedIopsOutputReference FixedIops { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIopsOutputReference">FilestoreInstancePerformanceConfigFixedIopsOutputReference</a>

---

##### `IopsPerTb`<sup>Required</sup> <a name="IopsPerTb" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb"></a>

```csharp
public FilestoreInstancePerformanceConfigIopsPerTbOutputReference IopsPerTb { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTbOutputReference">FilestoreInstancePerformanceConfigIopsPerTbOutputReference</a>

---

##### `FixedIopsInput`<sup>Optional</sup> <a name="FixedIopsInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput"></a>

```csharp
public FilestoreInstancePerformanceConfigFixedIops FixedIopsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigFixedIops">FilestoreInstancePerformanceConfigFixedIops</a>

---

##### `IopsPerTbInput`<sup>Optional</sup> <a name="IopsPerTbInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput"></a>

```csharp
public FilestoreInstancePerformanceConfigIopsPerTb IopsPerTbInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigIopsPerTb">FilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfigOutputReference.property.internalValue"></a>

```csharp
public FilestoreInstancePerformanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstancePerformanceConfig">FilestoreInstancePerformanceConfig</a>

---


### FilestoreInstanceTimeoutsOutputReference <a name="FilestoreInstanceTimeoutsOutputReference" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FilestoreInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FilestoreInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---



