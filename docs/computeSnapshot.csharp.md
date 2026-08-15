# `computeSnapshot` Submodule <a name="`computeSnapshot` Submodule" id="@cdktn/provider-google.computeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSnapshot <a name="ComputeSnapshot" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot google_compute_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshot(Construct Scope, string Id, ComputeSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig">ComputeSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig">ComputeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey">PutSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey">PutSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetChainName">ResetChainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotEncryptionKey">ResetSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotType">ResetSnapshotType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDisk">ResetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDiskEncryptionKey">ResetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceInstantSnapshot">ResetSourceInstantSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetStorageLocations">ResetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putParams"></a>

```csharp
private void PutParams(ComputeSnapshotParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a>

---

##### `PutSnapshotEncryptionKey` <a name="PutSnapshotEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey"></a>

```csharp
private void PutSnapshotEncryptionKey(ComputeSnapshotSnapshotEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---

##### `PutSourceDiskEncryptionKey` <a name="PutSourceDiskEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey"></a>

```csharp
private void PutSourceDiskEncryptionKey(ComputeSnapshotSourceDiskEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

---

##### `ResetChainName` <a name="ResetChainName" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetChainName"></a>

```csharp
private void ResetChainName()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSnapshotEncryptionKey` <a name="ResetSnapshotEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotEncryptionKey"></a>

```csharp
private void ResetSnapshotEncryptionKey()
```

##### `ResetSnapshotType` <a name="ResetSnapshotType" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSnapshotType"></a>

```csharp
private void ResetSnapshotType()
```

##### `ResetSourceDisk` <a name="ResetSourceDisk" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDisk"></a>

```csharp
private void ResetSourceDisk()
```

##### `ResetSourceDiskEncryptionKey` <a name="ResetSourceDiskEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceDiskEncryptionKey"></a>

```csharp
private void ResetSourceDiskEncryptionKey()
```

##### `ResetSourceInstantSnapshot` <a name="ResetSourceInstantSnapshot" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetSourceInstantSnapshot"></a>

```csharp
private void ResetSourceInstantSnapshot()
```

##### `ResetStorageLocations` <a name="ResetStorageLocations" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetStorageLocations"></a>

```csharp
private void ResetStorageLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeSnapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.licenses">Licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference">ComputeSnapshotParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKey">SnapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference">ComputeSnapshotSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotId">SnapshotId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference">ComputeSnapshotSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageBytes">StorageBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference">ComputeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.chainNameInput">ChainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKeyInput">SnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotTypeInput">SnapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKeyInput">SourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskInput">SourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceInstantSnapshotInput">SourceInstantSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocationsInput">StorageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.chainName">ChainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceInstantSnapshot">SourceInstantSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.licenses"></a>

```csharp
public string[] Licenses { get; }
```

- *Type:* string[]

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.params"></a>

```csharp
public ComputeSnapshotParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference">ComputeSnapshotParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionKey`<sup>Required</sup> <a name="SnapshotEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKey"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKeyOutputReference SnapshotEncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference">ComputeSnapshotSnapshotEncryptionKeyOutputReference</a>

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotId"></a>

```csharp
public double SnapshotId { get; }
```

- *Type:* double

---

##### `SourceDiskEncryptionKey`<sup>Required</sup> <a name="SourceDiskEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKey"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKeyOutputReference SourceDiskEncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference">ComputeSnapshotSourceDiskEncryptionKeyOutputReference</a>

---

##### `StorageBytes`<sup>Required</sup> <a name="StorageBytes" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageBytes"></a>

```csharp
public double StorageBytes { get; }
```

- *Type:* double

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.timeouts"></a>

```csharp
public ComputeSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference">ComputeSnapshotTimeoutsOutputReference</a>

---

##### `ChainNameInput`<sup>Optional</sup> <a name="ChainNameInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.chainNameInput"></a>

```csharp
public string ChainNameInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.paramsInput"></a>

```csharp
public ComputeSnapshotParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SnapshotEncryptionKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotEncryptionKeyInput"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---

##### `SnapshotTypeInput`<sup>Optional</sup> <a name="SnapshotTypeInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotTypeInput"></a>

```csharp
public string SnapshotTypeInput { get; }
```

- *Type:* string

---

##### `SourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="SourceDiskEncryptionKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskEncryptionKeyInput"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDiskInput"></a>

```csharp
public string SourceDiskInput { get; }
```

- *Type:* string

---

##### `SourceInstantSnapshotInput`<sup>Optional</sup> <a name="SourceInstantSnapshotInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceInstantSnapshotInput"></a>

```csharp
public string SourceInstantSnapshotInput { get; }
```

- *Type:* string

---

##### `StorageLocationsInput`<sup>Optional</sup> <a name="StorageLocationsInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocationsInput"></a>

```csharp
public string[] StorageLocationsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeSnapshotTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ChainName`<sup>Required</sup> <a name="ChainName" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.chainName"></a>

```csharp
public string ChainName { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; }
```

- *Type:* string

---

##### `SourceInstantSnapshot`<sup>Required</sup> <a name="SourceInstantSnapshot" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.sourceInstantSnapshot"></a>

```csharp
public string SourceInstantSnapshot { get; }
```

- *Type:* string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSnapshotConfig <a name="ComputeSnapshotConfig" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ChainName = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    ComputeSnapshotParams Params = null,
    string Project = null,
    ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKey = null,
    string SnapshotType = null,
    string SourceDisk = null,
    ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKey = null,
    string SourceInstantSnapshot = null,
    string[] StorageLocations = null,
    ComputeSnapshotTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.chainName">ChainName</a></code> | <code>string</code> | Creates the new snapshot in the snapshot chain labeled with the specified name. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#id ComputeSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this Snapshot. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#project ComputeSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotEncryptionKey">SnapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | snapshot_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotType">SnapshotType</a></code> | <code>string</code> | Indicates the type of the snapshot. Possible values: ["ARCHIVE", "STANDARD"]. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | A reference to the disk used to create this snapshot. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDiskEncryptionKey">SourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceInstantSnapshot">SourceInstantSnapshot</a></code> | <code>string</code> | A reference to the instant snapshot used to create this snapshot. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.storageLocations">StorageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket storage location of the snapshot (regional or multi-regional). |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the disk is hosted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#name ComputeSnapshot#name}

---

##### `ChainName`<sup>Optional</sup> <a name="ChainName" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.chainName"></a>

```csharp
public string ChainName { get; set; }
```

- *Type:* string

Creates the new snapshot in the snapshot chain labeled with the specified name.

The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#chain_name ComputeSnapshot#chain_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#deletion_policy ComputeSnapshot#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#description ComputeSnapshot#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#id ComputeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this Snapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#labels ComputeSnapshot#labels}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.params"></a>

```csharp
public ComputeSnapshotParams Params { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#params ComputeSnapshot#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#project ComputeSnapshot#project}.

---

##### `SnapshotEncryptionKey`<sup>Optional</sup> <a name="SnapshotEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotEncryptionKey"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey SnapshotEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#snapshot_encryption_key ComputeSnapshot#snapshot_encryption_key}

---

##### `SnapshotType`<sup>Optional</sup> <a name="SnapshotType" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.snapshotType"></a>

```csharp
public string SnapshotType { get; set; }
```

- *Type:* string

Indicates the type of the snapshot. Possible values: ["ARCHIVE", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#snapshot_type ComputeSnapshot#snapshot_type}

---

##### `SourceDisk`<sup>Optional</sup> <a name="SourceDisk" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; set; }
```

- *Type:* string

A reference to the disk used to create this snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#source_disk ComputeSnapshot#source_disk}

---

##### `SourceDiskEncryptionKey`<sup>Optional</sup> <a name="SourceDiskEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceDiskEncryptionKey"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey SourceDiskEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#source_disk_encryption_key ComputeSnapshot#source_disk_encryption_key}

---

##### `SourceInstantSnapshot`<sup>Optional</sup> <a name="SourceInstantSnapshot" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.sourceInstantSnapshot"></a>

```csharp
public string SourceInstantSnapshot { get; set; }
```

- *Type:* string

A reference to the instant snapshot used to create this snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#source_instant_snapshot ComputeSnapshot#source_instant_snapshot}

---

##### `StorageLocations`<sup>Optional</sup> <a name="StorageLocations" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.storageLocations"></a>

```csharp
public string[] StorageLocations { get; set; }
```

- *Type:* string[]

Cloud Storage bucket storage location of the snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#storage_locations ComputeSnapshot#storage_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.timeouts"></a>

```csharp
public ComputeSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#timeouts ComputeSnapshot#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the disk is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#zone ComputeSnapshot#zone}

---

### ComputeSnapshotParams <a name="ComputeSnapshotParams" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the snapshot. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#resource_manager_tags ComputeSnapshot#resource_manager_tags}

---

### ComputeSnapshotSnapshotEncryptionKey <a name="ComputeSnapshotSnapshotEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotSnapshotEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null,
    string RsaEncryptedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#kms_key_self_link ComputeSnapshot#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#kms_key_service_account ComputeSnapshot#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#raw_key ComputeSnapshot#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; set; }
```

- *Type:* string

Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#rsa_encrypted_key ComputeSnapshot#rsa_encrypted_key}

---

### ComputeSnapshotSourceDiskEncryptionKey <a name="ComputeSnapshotSourceDiskEncryptionKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotSourceDiskEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null,
    string RsaEncryptedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#kms_key_self_link ComputeSnapshot#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#kms_key_service_account ComputeSnapshot#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#raw_key ComputeSnapshot#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; set; }
```

- *Type:* string

Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#rsa_encrypted_key ComputeSnapshot#rsa_encrypted_key}

---

### ComputeSnapshotTimeouts <a name="ComputeSnapshotTimeouts" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#create ComputeSnapshot#create}. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#delete ComputeSnapshot#delete}. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#update ComputeSnapshot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#create ComputeSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#delete ComputeSnapshot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_snapshot#update ComputeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSnapshotParamsOutputReference <a name="ComputeSnapshotParamsOutputReference" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeSnapshotParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotParams">ComputeSnapshotParams</a>

---


### ComputeSnapshotSnapshotEncryptionKeyOutputReference <a name="ComputeSnapshotSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotSnapshotEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```csharp
private void ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```csharp
public string RsaEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeSnapshotSnapshotEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSnapshotEncryptionKey">ComputeSnapshotSnapshotEncryptionKey</a>

---


### ComputeSnapshotSourceDiskEncryptionKeyOutputReference <a name="ComputeSnapshotSourceDiskEncryptionKeyOutputReference" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotSourceDiskEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```csharp
private void ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```csharp
public string RsaEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public ComputeSnapshotSourceDiskEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotSourceDiskEncryptionKey">ComputeSnapshotSourceDiskEncryptionKey</a>

---


### ComputeSnapshotTimeoutsOutputReference <a name="ComputeSnapshotTimeoutsOutputReference" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeSnapshotTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeSnapshot.ComputeSnapshotTimeouts">ComputeSnapshotTimeouts</a>

---



