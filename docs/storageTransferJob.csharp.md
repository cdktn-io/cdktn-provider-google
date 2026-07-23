# `storageTransferJob` Submodule <a name="`storageTransferJob` Submodule" id="@cdktn/provider-google.storageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferJob <a name="StorageTransferJob" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJob(Construct Scope, string Id, StorageTransferJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putEventStream">PutEventStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec">PutReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec">PutTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetEventStream">ResetEventStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec">ResetReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec">ResetTransferSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventStream` <a name="PutEventStream" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putEventStream"></a>

```csharp
private void PutEventStream(StorageTransferJobEventStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putEventStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(StorageTransferJobLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(StorageTransferJobNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `PutReplicationSpec` <a name="PutReplicationSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec"></a>

```csharp
private void PutReplicationSpec(StorageTransferJobReplicationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putSchedule"></a>

```csharp
private void PutSchedule(StorageTransferJobSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `PutTransferSpec` <a name="PutTransferSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec"></a>

```csharp
private void PutTransferSpec(StorageTransferJobTransferSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEventStream` <a name="ResetEventStream" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetEventStream"></a>

```csharp
private void ResetEventStream()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReplicationSpec` <a name="ResetReplicationSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec"></a>

```csharp
private void ResetReplicationSpec()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTransferSpec` <a name="ResetTransferSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec"></a>

```csharp
private void ResetTransferSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageTransferJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageTransferJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageTransferJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageTransferJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

StorageTransferJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageTransferJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageTransferJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.eventStream">EventStream</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput">EventStreamInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput">ReplicationSpecInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput">TransferSpecInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `EventStream`<sup>Required</sup> <a name="EventStream" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.eventStream"></a>

```csharp
public StorageTransferJobEventStreamOutputReference EventStream { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a>

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig"></a>

```csharp
public StorageTransferJobLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a>

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig"></a>

```csharp
public StorageTransferJobNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a>

---

##### `ReplicationSpec`<sup>Required</sup> <a name="ReplicationSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec"></a>

```csharp
public StorageTransferJobReplicationSpecOutputReference ReplicationSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.schedule"></a>

```csharp
public StorageTransferJobScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a>

---

##### `TransferSpec`<sup>Required</sup> <a name="TransferSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec"></a>

```csharp
public StorageTransferJobTransferSpecOutputReference TransferSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventStreamInput`<sup>Optional</sup> <a name="EventStreamInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput"></a>

```csharp
public StorageTransferJobEventStream EventStreamInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput"></a>

```csharp
public StorageTransferJobLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput"></a>

```csharp
public StorageTransferJobNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicationSpecInput`<sup>Optional</sup> <a name="ReplicationSpecInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput"></a>

```csharp
public StorageTransferJobReplicationSpec ReplicationSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput"></a>

```csharp
public StorageTransferJobSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TransferSpecInput`<sup>Optional</sup> <a name="TransferSpecInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput"></a>

```csharp
public StorageTransferJobTransferSpec TransferSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferJobConfig <a name="StorageTransferJobConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string DeletionPolicy = null,
    StorageTransferJobEventStream EventStream = null,
    string Id = null,
    StorageTransferJobLoggingConfig LoggingConfig = null,
    string Name = null,
    StorageTransferJobNotificationConfig NotificationConfig = null,
    string Project = null,
    StorageTransferJobReplicationSpec ReplicationSpec = null,
    StorageTransferJobSchedule Schedule = null,
    string ServiceAccount = null,
    string Status = null,
    StorageTransferJobTransferSpec TransferSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.description">Description</a></code> | <code>string</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream">EventStream</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.name">Name</a></code> | <code>string</code> | The name of the Transfer Job. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.project">Project</a></code> | <code>string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The user-managed service account to run the job. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.status">Status</a></code> | <code>string</code> | Status of the job. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#description StorageTransferJob#description}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#deletion_policy StorageTransferJob#deletion_policy}

---

##### `EventStream`<sup>Optional</sup> <a name="EventStream" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream"></a>

```csharp
public StorageTransferJobEventStream EventStream { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#event_stream StorageTransferJob#event_stream}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig"></a>

```csharp
public StorageTransferJobLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#logging_config StorageTransferJob#logging_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig"></a>

```csharp
public StorageTransferJobNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#notification_config StorageTransferJob#notification_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#project StorageTransferJob#project}

---

##### `ReplicationSpec`<sup>Optional</sup> <a name="ReplicationSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec"></a>

```csharp
public StorageTransferJobReplicationSpec ReplicationSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#replication_spec StorageTransferJob#replication_spec}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule"></a>

```csharp
public StorageTransferJobSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#schedule StorageTransferJob#schedule}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The user-managed service account to run the job.

If this field is specified, the given service account is granted the necessary permissions to all applicable resources (e.g. GCS buckets) required by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#service_account StorageTransferJob#service_account}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#status StorageTransferJob#status}

---

##### `TransferSpec`<sup>Optional</sup> <a name="TransferSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec"></a>

```csharp
public StorageTransferJobTransferSpec TransferSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}

---

### StorageTransferJobEventStream <a name="StorageTransferJobEventStream" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobEventStream {
    string Name,
    string EventStreamExpirationTime = null,
    string EventStreamStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name">Name</a></code> | <code>string</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>string</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>string</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `EventStreamExpirationTime`<sup>Optional</sup> <a name="EventStreamExpirationTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```csharp
public string EventStreamExpirationTime { get; set; }
```

- *Type:* string

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#event_stream_expiration_time StorageTransferJob#event_stream_expiration_time}

---

##### `EventStreamStartTime`<sup>Optional</sup> <a name="EventStreamStartTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime"></a>

```csharp
public string EventStreamStartTime { get; set; }
```

- *Type:* string

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#event_stream_start_time StorageTransferJob#event_stream_start_time}

---

### StorageTransferJobLoggingConfig <a name="StorageTransferJobLoggingConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobLoggingConfig {
    bool|IResolvable EnableOnPremGcsTransferLogs = null,
    string[] LogActions = null,
    string[] LogActionStates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs">EnableOnPremGcsTransferLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions">LogActions</a></code> | <code>string[]</code> | Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates">LogActionStates</a></code> | <code>string[]</code> | States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |

---

##### `EnableOnPremGcsTransferLogs`<sup>Optional</sup> <a name="EnableOnPremGcsTransferLogs" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs"></a>

```csharp
public bool|IResolvable EnableOnPremGcsTransferLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#enable_on_prem_gcs_transfer_logs StorageTransferJob#enable_on_prem_gcs_transfer_logs}

---

##### `LogActions`<sup>Optional</sup> <a name="LogActions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions"></a>

```csharp
public string[] LogActions { get; set; }
```

- *Type:* string[]

Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#log_actions StorageTransferJob#log_actions}

---

##### `LogActionStates`<sup>Optional</sup> <a name="LogActionStates" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates"></a>

```csharp
public string[] LogActionStates { get; set; }
```

- *Type:* string[]

States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#log_action_states StorageTransferJob#log_action_states}

---

### StorageTransferJobNotificationConfig <a name="StorageTransferJobNotificationConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobNotificationConfig {
    string PayloadFormat,
    string PubsubTopic,
    string[] EventTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat">PayloadFormat</a></code> | <code>string</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes">EventTypes</a></code> | <code>string[]</code> | Event types for which a notification is desired. |

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat"></a>

```csharp
public string PayloadFormat { get; set; }
```

- *Type:* string

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#payload_format StorageTransferJob#payload_format}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}

---

##### `EventTypes`<sup>Optional</sup> <a name="EventTypes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes"></a>

```csharp
public string[] EventTypes { get; set; }
```

- *Type:* string[]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#event_types StorageTransferJob#event_types}

---

### StorageTransferJobReplicationSpec <a name="StorageTransferJobReplicationSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpec {
    StorageTransferJobReplicationSpecGcsDataSink GcsDataSink = null,
    StorageTransferJobReplicationSpecGcsDataSource GcsDataSource = null,
    StorageTransferJobReplicationSpecObjectConditions ObjectConditions = null,
    StorageTransferJobReplicationSpecTransferOptions TransferOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSink GcsDataSink { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSource GcsDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions"></a>

```csharp
public StorageTransferJobReplicationSpecObjectConditions ObjectConditions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptions TransferOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobReplicationSpecGcsDataSink <a name="StorageTransferJobReplicationSpecGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecGcsDataSink {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecGcsDataSource <a name="StorageTransferJobReplicationSpecGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecGcsDataSource {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecObjectConditions <a name="StorageTransferJobReplicationSpecObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecObjectConditions {
    string[] ExcludePrefixes = null,
    string[] IncludePrefixes = null,
    string LastModifiedBefore = null,
    string LastModifiedSince = null,
    string MaxTimeElapsedSinceLastModification = null,
    string MinTimeElapsedSinceLastModification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; set; }
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; set; }
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobReplicationSpecTransferOptions <a name="StorageTransferJobReplicationSpecTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecTransferOptions {
    bool|IResolvable DeleteObjectsFromSourceAfterTransfer = null,
    bool|IResolvable DeleteObjectsUniqueInSink = null,
    StorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptions = null,
    bool|IResolvable OverwriteObjectsAlreadyExistingInSink = null,
    string OverwriteWhen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransfer { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; set; }
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobReplicationSpecTransferOptionsMetadataOptions <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecTransferOptionsMetadataOptions {
    string Acl = null,
    string Gid = null,
    string KmsKey = null,
    string Mode = null,
    string StorageClass = null,
    string Symlink = null,
    string TemporaryHold = null,
    string TimeCreated = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl">Acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid">Gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey">KmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode">Mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass">StorageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink">Symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid">Uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid"></a>

```csharp
public string Gid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink"></a>

```csharp
public string Symlink { get; set; }
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

### StorageTransferJobSchedule <a name="StorageTransferJobSchedule" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobSchedule {
    StorageTransferJobScheduleScheduleStartDate ScheduleStartDate,
    string RepeatInterval = null,
    StorageTransferJobScheduleScheduleEndDate ScheduleEndDate = null,
    StorageTransferJobScheduleStartTimeOfDay StartTimeOfDay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval">RepeatInterval</a></code> | <code>string</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate"></a>

```csharp
public StorageTransferJobScheduleScheduleStartDate ScheduleStartDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}

---

##### `RepeatInterval`<sup>Optional</sup> <a name="RepeatInterval" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval"></a>

```csharp
public string RepeatInterval { get; set; }
```

- *Type:* string

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}

---

##### `ScheduleEndDate`<sup>Optional</sup> <a name="ScheduleEndDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate"></a>

```csharp
public StorageTransferJobScheduleScheduleEndDate ScheduleEndDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}

---

##### `StartTimeOfDay`<sup>Optional</sup> <a name="StartTimeOfDay" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay"></a>

```csharp
public StorageTransferJobScheduleStartTimeOfDay StartTimeOfDay { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}

---

### StorageTransferJobScheduleScheduleEndDate <a name="StorageTransferJobScheduleScheduleEndDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleScheduleEndDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day">Day</a></code> | <code>double</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month">Month</a></code> | <code>double</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year">Year</a></code> | <code>double</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleScheduleStartDate <a name="StorageTransferJobScheduleScheduleStartDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleScheduleStartDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day">Day</a></code> | <code>double</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month">Month</a></code> | <code>double</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year">Year</a></code> | <code>double</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleStartTimeOfDay <a name="StorageTransferJobScheduleStartTimeOfDay" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleStartTimeOfDay {
    double Hours,
    double Minutes,
    double Nanos,
    double Seconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#hours StorageTransferJob#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#minutes StorageTransferJob#minutes}

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#nanos StorageTransferJob#nanos}

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#seconds StorageTransferJob#seconds}

---

### StorageTransferJobTransferSpec <a name="StorageTransferJobTransferSpec" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpec {
    StorageTransferJobTransferSpecAwsS3CompatibleDataSource AwsS3CompatibleDataSource = null,
    StorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSource = null,
    StorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSource = null,
    StorageTransferJobTransferSpecGcsDataSink GcsDataSink = null,
    StorageTransferJobTransferSpecGcsDataSource GcsDataSource = null,
    StorageTransferJobTransferSpecHdfsDataSource HdfsDataSource = null,
    StorageTransferJobTransferSpecHttpDataSource HttpDataSource = null,
    StorageTransferJobTransferSpecObjectConditions ObjectConditions = null,
    StorageTransferJobTransferSpecPosixDataSink PosixDataSink = null,
    StorageTransferJobTransferSpecPosixDataSource PosixDataSource = null,
    string SinkAgentPoolName = null,
    string SourceAgentPoolName = null,
    StorageTransferJobTransferSpecTransferManifest TransferManifest = null,
    StorageTransferJobTransferSpecTransferOptions TransferOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3CompatibleDataSource">AwsS3CompatibleDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a></code> | aws_s3_compatible_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferManifest">TransferManifest</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a></code> | transfer_manifest block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `AwsS3CompatibleDataSource`<sup>Optional</sup> <a name="AwsS3CompatibleDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3CompatibleDataSource"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSource AwsS3CompatibleDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a>

aws_s3_compatible_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#aws_s3_compatible_data_source StorageTransferJob#aws_s3_compatible_data_source}

---

##### `AwsS3DataSource`<sup>Optional</sup> <a name="AwsS3DataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}

---

##### `AzureBlobStorageDataSource`<sup>Optional</sup> <a name="AzureBlobStorageDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSink GcsDataSink { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSource GcsDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `HdfsDataSource`<sup>Optional</sup> <a name="HdfsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```csharp
public StorageTransferJobTransferSpecHdfsDataSource HdfsDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#hdfs_data_source StorageTransferJob#hdfs_data_source}

---

##### `HttpDataSource`<sup>Optional</sup> <a name="HttpDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource"></a>

```csharp
public StorageTransferJobTransferSpecHttpDataSource HttpDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions"></a>

```csharp
public StorageTransferJobTransferSpecObjectConditions ObjectConditions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `PosixDataSink`<sup>Optional</sup> <a name="PosixDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSink PosixDataSink { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}

---

##### `PosixDataSource`<sup>Optional</sup> <a name="PosixDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSource PosixDataSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}

---

##### `SinkAgentPoolName`<sup>Optional</sup> <a name="SinkAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```csharp
public string SinkAgentPoolName { get; set; }
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}

---

##### `SourceAgentPoolName`<sup>Optional</sup> <a name="SourceAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```csharp
public string SourceAgentPoolName { get; set; }
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}

---

##### `TransferManifest`<sup>Optional</sup> <a name="TransferManifest" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferManifest"></a>

```csharp
public StorageTransferJobTransferSpecTransferManifest TransferManifest { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a>

transfer_manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#transfer_manifest StorageTransferJob#transfer_manifest}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptions TransferOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobTransferSpecAwsS3CompatibleDataSource <a name="StorageTransferJobTransferSpecAwsS3CompatibleDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3CompatibleDataSource {
    string BucketName,
    string Endpoint,
    string Path = null,
    string Region = null,
    StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata S3Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | Name of the bucket. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.endpoint">Endpoint</a></code> | <code>string</code> | Endpoint of the storage service. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.path">Path</a></code> | <code>string</code> | Specifies the path to transfer objects. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.region">Region</a></code> | <code>string</code> | Specifies the region to sign requests with. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.s3Metadata">S3Metadata</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a></code> | s3_metadata block. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Endpoint of the storage service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#endpoint StorageTransferJob#endpoint}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Specifies the path to transfer objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Specifies the region to sign requests with.

This can be left blank if requests should be signed with an empty region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#region StorageTransferJob#region}

---

##### `S3Metadata`<sup>Optional</sup> <a name="S3Metadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource.property.s3Metadata"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata S3Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a>

s3_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#s3_metadata StorageTransferJob#s3_metadata}

---

### StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata <a name="StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata {
    string AuthMethod = null,
    string ListApi = null,
    string Protocol = null,
    string RequestModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.authMethod">AuthMethod</a></code> | <code>string</code> | Authentication and authorization method used by the storage service. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.listApi">ListApi</a></code> | <code>string</code> | The Listing API to use for discovering objects. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.protocol">Protocol</a></code> | <code>string</code> | The network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.requestModel">RequestModel</a></code> | <code>string</code> | API request model used to call the storage service. |

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Authentication and authorization method used by the storage service.

When not specified, Transfer Service will attempt to determine right auth method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#auth_method StorageTransferJob#auth_method}

---

##### `ListApi`<sup>Optional</sup> <a name="ListApi" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.listApi"></a>

```csharp
public string ListApi { get; set; }
```

- *Type:* string

The Listing API to use for discovering objects.

When not specified, Transfer Service will attempt to determine the right API to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#list_api StorageTransferJob#list_api}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#protocol StorageTransferJob#protocol}

---

##### `RequestModel`<sup>Optional</sup> <a name="RequestModel" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata.property.requestModel"></a>

```csharp
public string RequestModel { get; set; }
```

- *Type:* string

API request model used to call the storage service.

When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#request_model StorageTransferJob#request_model}

---

### StorageTransferJobTransferSpecAwsS3DataSource <a name="StorageTransferJobTransferSpecAwsS3DataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3DataSource {
    string BucketName,
    StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKey = null,
    string CloudfrontDomain = null,
    string CredentialsSecret = null,
    bool|IResolvable ManagedPrivateNetwork = null,
    string Path = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">BucketName</a></code> | <code>string</code> | S3 Bucket name. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.cloudfrontDomain">CloudfrontDomain</a></code> | <code>string</code> | The CloudFront distribution domain name pointing to this bucket, to use when fetching. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | The Resource name of a secret in Secret Manager. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork">ManagedPrivateNetwork</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path">Path</a></code> | <code>string</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}

---

##### `CloudfrontDomain`<sup>Optional</sup> <a name="CloudfrontDomain" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.cloudfrontDomain"></a>

```csharp
public string CloudfrontDomain { get; set; }
```

- *Type:* string

The CloudFront distribution domain name pointing to this bucket, to use when fetching.

See [Transfer from S3 via CloudFront](https://cloud.google.com/storage-transfer/docs/s3-cloudfront) for more information. Format: https://{id}.cloudfront.net or any valid custom domain. Must begin with https://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#cloudfront_domain StorageTransferJob#cloudfront_domain}

---

##### `CredentialsSecret`<sup>Optional</sup> <a name="CredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; set; }
```

- *Type:* string

The Resource name of a secret in Secret Manager.

AWS credentials must be stored in Secret Manager in JSON format. If credentials_secret is specified, do not specify role_arn or aws_access_key. Format: projects/{projectNumber}/secrets/{secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#credentials_secret StorageTransferJob#credentials_secret}

---

##### `ManagedPrivateNetwork`<sup>Optional</sup> <a name="ManagedPrivateNetwork" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork"></a>

```csharp
public bool|IResolvable ManagedPrivateNetwork { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#managed_private_network StorageTransferJob#managed_private_network}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#role_arn StorageTransferJob#role_arn}

---

### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
    string AccessKeyId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | AWS Key ID. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | AWS Secret Access Key. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSource {
    string Container,
    string StorageAccount,
    StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentials = null,
    string CredentialsSecret = null,
    StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig FederatedIdentityConfig = null,
    string Path = null,
    string PrivateNetworkService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">Container</a></code> | <code>string</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">StorageAccount</a></code> | <code>string</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.federatedIdentityConfig">FederatedIdentityConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a></code> | federated_identity_config block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">Path</a></code> | <code>string</code> | Root path to transfer objects. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.privateNetworkService">PrivateNetworkService</a></code> | <code>string</code> | Service Directory Service used as the endpoint for transfers from a customer-managed VPC. Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#container StorageTransferJob#container}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```csharp
public string StorageAccount { get; set; }
```

- *Type:* string

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#storage_account StorageTransferJob#storage_account}

---

##### `AzureCredentials`<sup>Optional</sup> <a name="AzureCredentials" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}

---

##### `CredentialsSecret`<sup>Optional</sup> <a name="CredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; set; }
```

- *Type:* string

The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form.

Service Agent must have permissions to access secret. If credentials_secret is specified, do not specify azure_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#credentials_secret StorageTransferJob#credentials_secret}

---

##### `FederatedIdentityConfig`<sup>Optional</sup> <a name="FederatedIdentityConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.federatedIdentityConfig"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig FederatedIdentityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a>

federated_identity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#federated_identity_config StorageTransferJob#federated_identity_config}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `PrivateNetworkService`<sup>Optional</sup> <a name="PrivateNetworkService" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.privateNetworkService"></a>

```csharp
public string PrivateNetworkService { get; set; }
```

- *Type:* string

Service Directory Service used as the endpoint for transfers from a customer-managed VPC. Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#private_network_service StorageTransferJob#private_network_service}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
    string SasToken
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">SasToken</a></code> | <code>string</code> | Azure shared access signature. |

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```csharp
public string SasToken { get; set; }
```

- *Type:* string

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#sas_token StorageTransferJob#sas_token}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig {
    string ClientId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client (application) ID of the application with federated credentials. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant (directory) ID of the application with federated credentials. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client (application) ID of the application with federated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#client_id StorageTransferJob#client_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant (directory) ID of the application with federated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#tenant_id StorageTransferJob#tenant_id}

---

### StorageTransferJobTransferSpecGcsDataSink <a name="StorageTransferJobTransferSpecGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecGcsDataSink {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecGcsDataSource <a name="StorageTransferJobTransferSpecGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecGcsDataSource {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHdfsDataSource <a name="StorageTransferJobTransferSpecHdfsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecHdfsDataSource {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path">Path</a></code> | <code>string</code> | Directory path to the filesystem. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHttpDataSource <a name="StorageTransferJobTransferSpecHttpDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecHttpDataSource {
    string ListUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl">ListUrl</a></code> | <code>string</code> | The URL that points to the file that stores the object list entries. |

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```csharp
public string ListUrl { get; set; }
```

- *Type:* string

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#list_url StorageTransferJob#list_url}

---

### StorageTransferJobTransferSpecObjectConditions <a name="StorageTransferJobTransferSpecObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecObjectConditions {
    string[] ExcludePrefixes = null,
    string[] IncludePrefixes = null,
    string LastModifiedBefore = null,
    string LastModifiedSince = null,
    string MaxTimeElapsedSinceLastModification = null,
    string MinTimeElapsedSinceLastModification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; set; }
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; set; }
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobTransferSpecPosixDataSink <a name="StorageTransferJobTransferSpecPosixDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecPosixDataSink {
    string RootDirectory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecPosixDataSource <a name="StorageTransferJobTransferSpecPosixDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecPosixDataSource {
    string RootDirectory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecTransferManifest <a name="StorageTransferJobTransferSpecTransferManifest" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferManifest {
    string Location
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest.property.location">Location</a></code> | <code>string</code> | Cloud Storage path to the manifest CSV. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Cloud Storage path to the manifest CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#location StorageTransferJob#location}

---

### StorageTransferJobTransferSpecTransferOptions <a name="StorageTransferJobTransferSpecTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferOptions {
    bool|IResolvable DeleteObjectsFromSourceAfterTransfer = null,
    bool|IResolvable DeleteObjectsUniqueInSink = null,
    StorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptions = null,
    bool|IResolvable OverwriteObjectsAlreadyExistingInSink = null,
    string OverwriteWhen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransfer { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; set; }
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobTransferSpecTransferOptionsMetadataOptions <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferOptionsMetadataOptions {
    string Acl = null,
    string Gid = null,
    string KmsKey = null,
    string Mode = null,
    string StorageClass = null,
    string Symlink = null,
    string TemporaryHold = null,
    string TimeCreated = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl">Acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid">Gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey">KmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode">Mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass">StorageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink">Symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid">Uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid"></a>

```csharp
public string Gid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink"></a>

```csharp
public string Symlink { get; set; }
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferJobEventStreamOutputReference <a name="StorageTransferJobEventStreamOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobEventStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">ResetEventStreamExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">ResetEventStreamStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventStreamExpirationTime` <a name="ResetEventStreamExpirationTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```csharp
private void ResetEventStreamExpirationTime()
```

##### `ResetEventStreamStartTime` <a name="ResetEventStreamStartTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```csharp
private void ResetEventStreamStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">EventStreamExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">EventStreamStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventStreamExpirationTimeInput`<sup>Optional</sup> <a name="EventStreamExpirationTimeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```csharp
public string EventStreamExpirationTimeInput { get; }
```

- *Type:* string

---

##### `EventStreamStartTimeInput`<sup>Optional</sup> <a name="EventStreamStartTimeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```csharp
public string EventStreamStartTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EventStreamExpirationTime`<sup>Required</sup> <a name="EventStreamExpirationTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```csharp
public string EventStreamExpirationTime { get; }
```

- *Type:* string

---

##### `EventStreamStartTime`<sup>Required</sup> <a name="EventStreamStartTime" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```csharp
public string EventStreamStartTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobEventStream InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---


### StorageTransferJobLoggingConfigOutputReference <a name="StorageTransferJobLoggingConfigOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs">ResetEnableOnPremGcsTransferLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions">ResetLogActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates">ResetLogActionStates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableOnPremGcsTransferLogs` <a name="ResetEnableOnPremGcsTransferLogs" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs"></a>

```csharp
private void ResetEnableOnPremGcsTransferLogs()
```

##### `ResetLogActions` <a name="ResetLogActions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions"></a>

```csharp
private void ResetLogActions()
```

##### `ResetLogActionStates` <a name="ResetLogActionStates" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates"></a>

```csharp
private void ResetLogActionStates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput">EnableOnPremGcsTransferLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput">LogActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput">LogActionStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs">EnableOnPremGcsTransferLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions">LogActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates">LogActionStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableOnPremGcsTransferLogsInput`<sup>Optional</sup> <a name="EnableOnPremGcsTransferLogsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput"></a>

```csharp
public bool|IResolvable EnableOnPremGcsTransferLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogActionsInput`<sup>Optional</sup> <a name="LogActionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput"></a>

```csharp
public string[] LogActionsInput { get; }
```

- *Type:* string[]

---

##### `LogActionStatesInput`<sup>Optional</sup> <a name="LogActionStatesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput"></a>

```csharp
public string[] LogActionStatesInput { get; }
```

- *Type:* string[]

---

##### `EnableOnPremGcsTransferLogs`<sup>Required</sup> <a name="EnableOnPremGcsTransferLogs" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs"></a>

```csharp
public bool|IResolvable EnableOnPremGcsTransferLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogActions`<sup>Required</sup> <a name="LogActions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions"></a>

```csharp
public string[] LogActions { get; }
```

- *Type:* string[]

---

##### `LogActionStates`<sup>Required</sup> <a name="LogActionStates" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates"></a>

```csharp
public string[] LogActionStates { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---


### StorageTransferJobNotificationConfigOutputReference <a name="StorageTransferJobNotificationConfigOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes">ResetEventTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventTypes` <a name="ResetEventTypes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```csharp
private void ResetEventTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">EventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">PayloadFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes">EventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat">PayloadFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```csharp
public string[] EventTypesInput { get; }
```

- *Type:* string[]

---

##### `PayloadFormatInput`<sup>Optional</sup> <a name="PayloadFormatInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```csharp
public string PayloadFormatInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```csharp
public string[] EventTypes { get; }
```

- *Type:* string[]

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```csharp
public string PayloadFormat { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---


### StorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecGcsDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---


### StorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecGcsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---


### StorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="StorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecObjectConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```csharp
private void ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```csharp
private void ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```csharp
private void ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```csharp
private void ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```csharp
public string[] ExcludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```csharp
public string[] IncludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```csharp
public string LastModifiedBeforeInput { get; }
```

- *Type:* string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```csharp
public string LastModifiedSinceInput { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MaxTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MinTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; }
```

- *Type:* string[]

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; }
```

- *Type:* string[]

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; }
```

- *Type:* string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpecObjectConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---


### StorageTransferJobReplicationSpecOutputReference <a name="StorageTransferJobReplicationSpecOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```csharp
private void PutGcsDataSink(StorageTransferJobReplicationSpecGcsDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```csharp
private void PutGcsDataSource(StorageTransferJobReplicationSpecGcsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```csharp
private void PutObjectConditions(StorageTransferJobReplicationSpecObjectConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```csharp
private void PutTransferOptions(StorageTransferJobReplicationSpecTransferOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```csharp
private void ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```csharp
private void ResetGcsDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```csharp
private void ResetObjectConditions()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```csharp
private void ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSinkOutputReference GcsDataSink { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSourceOutputReference GcsDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```csharp
public StorageTransferJobReplicationSpecObjectConditionsOutputReference ObjectConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptionsOutputReference TransferOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSink GcsDataSinkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```csharp
public StorageTransferJobReplicationSpecGcsDataSource GcsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```csharp
public StorageTransferJobReplicationSpecObjectConditions ObjectConditionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptions TransferOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---


### StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcl` <a name="ResetAcl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">Symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```csharp
public string GidInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```csharp
public string SymlinkInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```csharp
public string Symlink { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptionsMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobReplicationSpecTransferOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(StorageTransferJobReplicationSpecTransferOptionsMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```csharp
private void ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```csharp
private void ResetDeleteObjectsUniqueInSink()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```csharp
private void ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```csharp
private void ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransferInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```csharp
public string OverwriteWhenInput { get; }
```

- *Type:* string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransfer { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobReplicationSpecTransferOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---


### StorageTransferJobScheduleOutputReference <a name="StorageTransferJobScheduleOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate">PutScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate">PutScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay">PutStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval">ResetRepeatInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate">ResetScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay">ResetStartTimeOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleEndDate` <a name="PutScheduleEndDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```csharp
private void PutScheduleEndDate(StorageTransferJobScheduleScheduleEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `PutScheduleStartDate` <a name="PutScheduleStartDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```csharp
private void PutScheduleStartDate(StorageTransferJobScheduleScheduleStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `PutStartTimeOfDay` <a name="PutStartTimeOfDay" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```csharp
private void PutStartTimeOfDay(StorageTransferJobScheduleStartTimeOfDay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `ResetRepeatInterval` <a name="ResetRepeatInterval" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```csharp
private void ResetRepeatInterval()
```

##### `ResetScheduleEndDate` <a name="ResetScheduleEndDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```csharp
private void ResetScheduleEndDate()
```

##### `ResetStartTimeOfDay` <a name="ResetStartTimeOfDay" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```csharp
private void ResetStartTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput">RepeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">ScheduleEndDateInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">ScheduleStartDateInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">StartTimeOfDayInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval">RepeatInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleEndDate`<sup>Required</sup> <a name="ScheduleEndDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```csharp
public StorageTransferJobScheduleScheduleEndDateOutputReference ScheduleEndDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```csharp
public StorageTransferJobScheduleScheduleStartDateOutputReference ScheduleStartDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `StartTimeOfDay`<sup>Required</sup> <a name="StartTimeOfDay" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```csharp
public StorageTransferJobScheduleStartTimeOfDayOutputReference StartTimeOfDay { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `RepeatIntervalInput`<sup>Optional</sup> <a name="RepeatIntervalInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```csharp
public string RepeatIntervalInput { get; }
```

- *Type:* string

---

##### `ScheduleEndDateInput`<sup>Optional</sup> <a name="ScheduleEndDateInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```csharp
public StorageTransferJobScheduleScheduleEndDate ScheduleEndDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `ScheduleStartDateInput`<sup>Optional</sup> <a name="ScheduleStartDateInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```csharp
public StorageTransferJobScheduleScheduleStartDate ScheduleStartDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `StartTimeOfDayInput`<sup>Optional</sup> <a name="StartTimeOfDayInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```csharp
public StorageTransferJobScheduleStartTimeOfDay StartTimeOfDayInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `RepeatInterval`<sup>Required</sup> <a name="RepeatInterval" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```csharp
public string RepeatInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---


### StorageTransferJobScheduleScheduleEndDateOutputReference <a name="StorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleScheduleEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobScheduleScheduleEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---


### StorageTransferJobScheduleScheduleStartDateOutputReference <a name="StorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleScheduleStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobScheduleScheduleStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---


### StorageTransferJobScheduleStartTimeOfDayOutputReference <a name="StorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobScheduleStartTimeOfDayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobScheduleStartTimeOfDay InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---


### StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference <a name="StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.putS3Metadata">PutS3Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetS3Metadata">ResetS3Metadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Metadata` <a name="PutS3Metadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.putS3Metadata"></a>

```csharp
private void PutS3Metadata(StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.putS3Metadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a>

---

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3Metadata` <a name="ResetS3Metadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.resetS3Metadata"></a>

```csharp
private void ResetS3Metadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.s3Metadata">S3Metadata</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.s3MetadataInput">S3MetadataInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Metadata`<sup>Required</sup> <a name="S3Metadata" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.s3Metadata"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference S3Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3MetadataInput`<sup>Optional</sup> <a name="S3MetadataInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.s3MetadataInput"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata S3MetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a>

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a>

---


### StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference <a name="StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetListApi">ResetListApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetRequestModel">ResetRequestModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetListApi` <a name="ResetListApi" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetListApi"></a>

```csharp
private void ResetListApi()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRequestModel` <a name="ResetRequestModel" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.resetRequestModel"></a>

```csharp
private void ResetRequestModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.listApiInput">ListApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.requestModelInput">RequestModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.listApi">ListApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.requestModel">RequestModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `ListApiInput`<sup>Optional</sup> <a name="ListApiInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.listApiInput"></a>

```csharp
public string ListApiInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RequestModelInput`<sup>Optional</sup> <a name="RequestModelInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.requestModelInput"></a>

```csharp
public string RequestModelInput { get; }
```

- *Type:* string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `ListApi`<sup>Required</sup> <a name="ListApi" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.listApi"></a>

```csharp
public string ListApi { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RequestModel`<sup>Required</sup> <a name="RequestModel" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.requestModel"></a>

```csharp
public string RequestModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3MetadataOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceS3Metadata</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAwsS3DataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetCloudfrontDomain">ResetCloudfrontDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetCredentialsSecret">ResetCredentialsSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork">ResetManagedPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```csharp
private void PutAwsAccessKey(StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```csharp
private void ResetAwsAccessKey()
```

##### `ResetCloudfrontDomain` <a name="ResetCloudfrontDomain" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetCloudfrontDomain"></a>

```csharp
private void ResetCloudfrontDomain()
```

##### `ResetCredentialsSecret` <a name="ResetCredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetCredentialsSecret"></a>

```csharp
private void ResetCredentialsSecret()
```

##### `ResetManagedPrivateNetwork` <a name="ResetManagedPrivateNetwork" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork"></a>

```csharp
private void ResetManagedPrivateNetwork()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.cloudfrontDomainInput">CloudfrontDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.credentialsSecretInput">CredentialsSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput">ManagedPrivateNetworkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.cloudfrontDomain">CloudfrontDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork">ManagedPrivateNetwork</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference AwsAccessKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CloudfrontDomainInput`<sup>Optional</sup> <a name="CloudfrontDomainInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.cloudfrontDomainInput"></a>

```csharp
public string CloudfrontDomainInput { get; }
```

- *Type:* string

---

##### `CredentialsSecretInput`<sup>Optional</sup> <a name="CredentialsSecretInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.credentialsSecretInput"></a>

```csharp
public string CredentialsSecretInput { get; }
```

- *Type:* string

---

##### `ManagedPrivateNetworkInput`<sup>Optional</sup> <a name="ManagedPrivateNetworkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput"></a>

```csharp
public bool|IResolvable ManagedPrivateNetworkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CloudfrontDomain`<sup>Required</sup> <a name="CloudfrontDomain" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.cloudfrontDomain"></a>

```csharp
public string CloudfrontDomain { get; }
```

- *Type:* string

---

##### `CredentialsSecret`<sup>Required</sup> <a name="CredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; }
```

- *Type:* string

---

##### `ManagedPrivateNetwork`<sup>Required</sup> <a name="ManagedPrivateNetwork" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork"></a>

```csharp
public bool|IResolvable ManagedPrivateNetwork { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">SasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```csharp
public string SasTokenInput { get; }
```

- *Type:* string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```csharp
public string SasToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">PutAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putFederatedIdentityConfig">PutFederatedIdentityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials">ResetAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret">ResetCredentialsSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetFederatedIdentityConfig">ResetFederatedIdentityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPrivateNetworkService">ResetPrivateNetworkService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureCredentials` <a name="PutAzureCredentials" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```csharp
private void PutAzureCredentials(StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `PutFederatedIdentityConfig` <a name="PutFederatedIdentityConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putFederatedIdentityConfig"></a>

```csharp
private void PutFederatedIdentityConfig(StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putFederatedIdentityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a>

---

##### `ResetAzureCredentials` <a name="ResetAzureCredentials" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials"></a>

```csharp
private void ResetAzureCredentials()
```

##### `ResetCredentialsSecret` <a name="ResetCredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret"></a>

```csharp
private void ResetCredentialsSecret()
```

##### `ResetFederatedIdentityConfig` <a name="ResetFederatedIdentityConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetFederatedIdentityConfig"></a>

```csharp
private void ResetFederatedIdentityConfig()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPrivateNetworkService` <a name="ResetPrivateNetworkService" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPrivateNetworkService"></a>

```csharp
private void ResetPrivateNetworkService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.federatedIdentityConfig">FederatedIdentityConfig</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">AzureCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput">CredentialsSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.federatedIdentityConfigInput">FederatedIdentityConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.privateNetworkServiceInput">PrivateNetworkServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.privateNetworkService">PrivateNetworkService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">StorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureCredentials`<sup>Required</sup> <a name="AzureCredentials" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference AzureCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `FederatedIdentityConfig`<sup>Required</sup> <a name="FederatedIdentityConfig" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.federatedIdentityConfig"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference FederatedIdentityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfigOutputReference</a>

---

##### `AzureCredentialsInput`<sup>Optional</sup> <a name="AzureCredentialsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentialsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `CredentialsSecretInput`<sup>Optional</sup> <a name="CredentialsSecretInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput"></a>

```csharp
public string CredentialsSecretInput { get; }
```

- *Type:* string

---

##### `FederatedIdentityConfigInput`<sup>Optional</sup> <a name="FederatedIdentityConfigInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.federatedIdentityConfigInput"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig FederatedIdentityConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig">StorageTransferJobTransferSpecAzureBlobStorageDataSourceFederatedIdentityConfig</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PrivateNetworkServiceInput`<sup>Optional</sup> <a name="PrivateNetworkServiceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.privateNetworkServiceInput"></a>

```csharp
public string PrivateNetworkServiceInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```csharp
public string StorageAccountInput { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `CredentialsSecret`<sup>Required</sup> <a name="CredentialsSecret" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PrivateNetworkService`<sup>Required</sup> <a name="PrivateNetworkService" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.privateNetworkService"></a>

```csharp
public string PrivateNetworkService { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```csharp
public string StorageAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### StorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="StorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecGcsDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---


### StorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="StorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecGcsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---


### StorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="StorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecHdfsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecHdfsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---


### StorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="StorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecHttpDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">ListUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">ListUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListUrlInput`<sup>Optional</sup> <a name="ListUrlInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```csharp
public string ListUrlInput { get; }
```

- *Type:* string

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```csharp
public string ListUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecHttpDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---


### StorageTransferJobTransferSpecObjectConditionsOutputReference <a name="StorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecObjectConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```csharp
private void ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```csharp
private void ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```csharp
private void ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```csharp
private void ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```csharp
public string[] ExcludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```csharp
public string[] IncludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```csharp
public string LastModifiedBeforeInput { get; }
```

- *Type:* string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```csharp
public string LastModifiedSinceInput { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MaxTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MinTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; }
```

- *Type:* string[]

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; }
```

- *Type:* string[]

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; }
```

- *Type:* string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecObjectConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---


### StorageTransferJobTransferSpecOutputReference <a name="StorageTransferJobTransferSpecOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3CompatibleDataSource">PutAwsS3CompatibleDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">PutAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">PutAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource">PutHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource">PutHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink">PutPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource">PutPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferManifest">PutTransferManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3CompatibleDataSource">ResetAwsS3CompatibleDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">ResetAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">ResetAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">ResetHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource">ResetHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink">ResetPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource">ResetPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">ResetSinkAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">ResetSourceAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferManifest">ResetTransferManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsS3CompatibleDataSource` <a name="PutAwsS3CompatibleDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3CompatibleDataSource"></a>

```csharp
private void PutAwsS3CompatibleDataSource(StorageTransferJobTransferSpecAwsS3CompatibleDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3CompatibleDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a>

---

##### `PutAwsS3DataSource` <a name="PutAwsS3DataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```csharp
private void PutAwsS3DataSource(StorageTransferJobTransferSpecAwsS3DataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `PutAzureBlobStorageDataSource` <a name="PutAzureBlobStorageDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```csharp
private void PutAzureBlobStorageDataSource(StorageTransferJobTransferSpecAzureBlobStorageDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```csharp
private void PutGcsDataSink(StorageTransferJobTransferSpecGcsDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```csharp
private void PutGcsDataSource(StorageTransferJobTransferSpecGcsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `PutHdfsDataSource` <a name="PutHdfsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```csharp
private void PutHdfsDataSource(StorageTransferJobTransferSpecHdfsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `PutHttpDataSource` <a name="PutHttpDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```csharp
private void PutHttpDataSource(StorageTransferJobTransferSpecHttpDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```csharp
private void PutObjectConditions(StorageTransferJobTransferSpecObjectConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `PutPosixDataSink` <a name="PutPosixDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```csharp
private void PutPosixDataSink(StorageTransferJobTransferSpecPosixDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PutPosixDataSource` <a name="PutPosixDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```csharp
private void PutPosixDataSource(StorageTransferJobTransferSpecPosixDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `PutTransferManifest` <a name="PutTransferManifest" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferManifest"></a>

```csharp
private void PutTransferManifest(StorageTransferJobTransferSpecTransferManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferManifest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```csharp
private void PutTransferOptions(StorageTransferJobTransferSpecTransferOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `ResetAwsS3CompatibleDataSource` <a name="ResetAwsS3CompatibleDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3CompatibleDataSource"></a>

```csharp
private void ResetAwsS3CompatibleDataSource()
```

##### `ResetAwsS3DataSource` <a name="ResetAwsS3DataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```csharp
private void ResetAwsS3DataSource()
```

##### `ResetAzureBlobStorageDataSource` <a name="ResetAzureBlobStorageDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```csharp
private void ResetAzureBlobStorageDataSource()
```

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```csharp
private void ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```csharp
private void ResetGcsDataSource()
```

##### `ResetHdfsDataSource` <a name="ResetHdfsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```csharp
private void ResetHdfsDataSource()
```

##### `ResetHttpDataSource` <a name="ResetHttpDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```csharp
private void ResetHttpDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```csharp
private void ResetObjectConditions()
```

##### `ResetPosixDataSink` <a name="ResetPosixDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```csharp
private void ResetPosixDataSink()
```

##### `ResetPosixDataSource` <a name="ResetPosixDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```csharp
private void ResetPosixDataSource()
```

##### `ResetSinkAgentPoolName` <a name="ResetSinkAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```csharp
private void ResetSinkAgentPoolName()
```

##### `ResetSourceAgentPoolName` <a name="ResetSourceAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```csharp
private void ResetSourceAgentPoolName()
```

##### `ResetTransferManifest` <a name="ResetTransferManifest" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferManifest"></a>

```csharp
private void ResetTransferManifest()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```csharp
private void ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3CompatibleDataSource">AwsS3CompatibleDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferManifest">TransferManifest</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference">StorageTransferJobTransferSpecTransferManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3CompatibleDataSourceInput">AwsS3CompatibleDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">AwsS3DataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">AzureBlobStorageDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">HdfsDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">HttpDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">PosixDataSinkInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">PosixDataSourceInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">SinkAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">SourceAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferManifestInput">TransferManifestInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsS3CompatibleDataSource`<sup>Required</sup> <a name="AwsS3CompatibleDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3CompatibleDataSource"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference AwsS3CompatibleDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference">StorageTransferJobTransferSpecAwsS3CompatibleDataSourceOutputReference</a>

---

##### `AwsS3DataSource`<sup>Required</sup> <a name="AwsS3DataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSourceOutputReference AwsS3DataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `AzureBlobStorageDataSource`<sup>Required</sup> <a name="AzureBlobStorageDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference AzureBlobStorageDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSinkOutputReference GcsDataSink { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSourceOutputReference GcsDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `HdfsDataSource`<sup>Required</sup> <a name="HdfsDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```csharp
public StorageTransferJobTransferSpecHdfsDataSourceOutputReference HdfsDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `HttpDataSource`<sup>Required</sup> <a name="HttpDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```csharp
public StorageTransferJobTransferSpecHttpDataSourceOutputReference HttpDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```csharp
public StorageTransferJobTransferSpecObjectConditionsOutputReference ObjectConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `PosixDataSink`<sup>Required</sup> <a name="PosixDataSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSinkOutputReference PosixDataSink { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `PosixDataSource`<sup>Required</sup> <a name="PosixDataSource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSourceOutputReference PosixDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `TransferManifest`<sup>Required</sup> <a name="TransferManifest" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferManifest"></a>

```csharp
public StorageTransferJobTransferSpecTransferManifestOutputReference TransferManifest { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference">StorageTransferJobTransferSpecTransferManifestOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptionsOutputReference TransferOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `AwsS3CompatibleDataSourceInput`<sup>Optional</sup> <a name="AwsS3CompatibleDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3CompatibleDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3CompatibleDataSource AwsS3CompatibleDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3CompatibleDataSource">StorageTransferJobTransferSpecAwsS3CompatibleDataSource</a>

---

##### `AwsS3DataSourceInput`<sup>Optional</sup> <a name="AwsS3DataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `AzureBlobStorageDataSourceInput`<sup>Optional</sup> <a name="AzureBlobStorageDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSink GcsDataSinkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecGcsDataSource GcsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `HdfsDataSourceInput`<sup>Optional</sup> <a name="HdfsDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecHdfsDataSource HdfsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `HttpDataSourceInput`<sup>Optional</sup> <a name="HttpDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecHttpDataSource HttpDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```csharp
public StorageTransferJobTransferSpecObjectConditions ObjectConditionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `PosixDataSinkInput`<sup>Optional</sup> <a name="PosixDataSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSink PosixDataSinkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PosixDataSourceInput`<sup>Optional</sup> <a name="PosixDataSourceInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSource PosixDataSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `SinkAgentPoolNameInput`<sup>Optional</sup> <a name="SinkAgentPoolNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```csharp
public string SinkAgentPoolNameInput { get; }
```

- *Type:* string

---

##### `SourceAgentPoolNameInput`<sup>Optional</sup> <a name="SourceAgentPoolNameInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```csharp
public string SourceAgentPoolNameInput { get; }
```

- *Type:* string

---

##### `TransferManifestInput`<sup>Optional</sup> <a name="TransferManifestInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferManifestInput"></a>

```csharp
public StorageTransferJobTransferSpecTransferManifest TransferManifestInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a>

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptions TransferOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `SinkAgentPoolName`<sup>Required</sup> <a name="SinkAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```csharp
public string SinkAgentPoolName { get; }
```

- *Type:* string

---

##### `SourceAgentPoolName`<sup>Required</sup> <a name="SourceAgentPoolName" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```csharp
public string SourceAgentPoolName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---


### StorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="StorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecPosixDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---


### StorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="StorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecPosixDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecPosixDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---


### StorageTransferJobTransferSpecTransferManifestOutputReference <a name="StorageTransferJobTransferSpecTransferManifestOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifestOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecTransferManifest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferManifest">StorageTransferJobTransferSpecTransferManifest</a>

---


### StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcl` <a name="ResetAcl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">Symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```csharp
public string GidInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```csharp
public string SymlinkInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```csharp
public string Symlink { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptionsMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobTransferSpecTransferOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new StorageTransferJobTransferSpecTransferOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(StorageTransferJobTransferSpecTransferOptionsMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```csharp
private void ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```csharp
private void ResetDeleteObjectsUniqueInSink()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```csharp
private void ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```csharp
private void ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransferInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```csharp
public string OverwriteWhenInput { get; }
```

- *Type:* string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public bool|IResolvable DeleteObjectsFromSourceAfterTransfer { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```csharp
public bool|IResolvable DeleteObjectsUniqueInSink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public bool|IResolvable OverwriteObjectsAlreadyExistingInSink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageTransferJobTransferSpecTransferOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---



