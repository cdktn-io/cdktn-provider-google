# `workstationsWorkstationConfig` Submodule <a name="`workstationsWorkstationConfig` Submodule" id="@cdktn/provider-google.workstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationConfigA <a name="WorkstationsWorkstationConfigA" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigA(Construct Scope, string Id, WorkstationsWorkstationConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig">WorkstationsWorkstationConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig">WorkstationsWorkstationConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts">PutAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories">PutEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories">PutPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks">PutReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections">ResetDisableTcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent">ResetEnableAuditAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories">ResetEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations">ResetMaxUsableWorkstations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories">ResetPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks">ResetReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones">ResetReplicaZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout">ResetRunningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedPorts` <a name="PutAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts"></a>

```csharp
private void PutAllowedPorts(IResolvable|WorkstationsWorkstationConfigAllowedPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer"></a>

```csharp
private void PutContainer(WorkstationsWorkstationConfigContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey"></a>

```csharp
private void PutEncryptionKey(WorkstationsWorkstationConfigEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `PutEphemeralDirectories` <a name="PutEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories"></a>

```csharp
private void PutEphemeralDirectories(IResolvable|WorkstationsWorkstationConfigEphemeralDirectories[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]

---

##### `PutHost` <a name="PutHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost"></a>

```csharp
private void PutHost(WorkstationsWorkstationConfigHost Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `PutPersistentDirectories` <a name="PutPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```csharp
private void PutPersistentDirectories(IResolvable|WorkstationsWorkstationConfigPersistentDirectories[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]

---

##### `PutReadinessChecks` <a name="PutReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks"></a>

```csharp
private void PutReadinessChecks(IResolvable|WorkstationsWorkstationConfigReadinessChecks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkstationsWorkstationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisableTcpConnections` <a name="ResetDisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections"></a>

```csharp
private void ResetDisableTcpConnections()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableAuditAgent` <a name="ResetEnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent"></a>

```csharp
private void ResetEnableAuditAgent()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetEphemeralDirectories` <a name="ResetEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories"></a>

```csharp
private void ResetEphemeralDirectories()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxUsableWorkstations` <a name="ResetMaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations"></a>

```csharp
private void ResetMaxUsableWorkstations()
```

##### `ResetPersistentDirectories` <a name="ResetPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```csharp
private void ResetPersistentDirectories()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReadinessChecks` <a name="ResetReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks"></a>

```csharp
private void ResetReadinessChecks()
```

##### `ResetReplicaZones` <a name="ResetReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones"></a>

```csharp
private void ResetReplicaZones()
```

##### `ResetRunningTimeout` <a name="ResetRunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout"></a>

```csharp
private void ResetRunningTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkstationsWorkstationConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkstationsWorkstationConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts">AllowedPorts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded">Degraded</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories">EphemeralDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host">Host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories">PersistentDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks">ReadinessChecks</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput">DisableTcpConnectionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput">EnableAuditAgentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput">EphemeralDirectoriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput">HostInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput">MaxUsableWorkstationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput">PersistentDirectoriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput">ReadinessChecksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput">ReplicaZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput">RunningTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections">DisableTcpConnections</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent">EnableAuditAgent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations">MaxUsableWorkstations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones">ReplicaZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout">RunningTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts"></a>

```csharp
public WorkstationsWorkstationConfigAllowedPortsList AllowedPorts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions"></a>

```csharp
public WorkstationsWorkstationConfigConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container"></a>

```csharp
public WorkstationsWorkstationConfigContainerOutputReference Container { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Degraded`<sup>Required</sup> <a name="Degraded" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded"></a>

```csharp
public IResolvable Degraded { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey"></a>

```csharp
public WorkstationsWorkstationConfigEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `EphemeralDirectories`<sup>Required</sup> <a name="EphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories"></a>

```csharp
public WorkstationsWorkstationConfigEphemeralDirectoriesList EphemeralDirectories { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host"></a>

```csharp
public WorkstationsWorkstationConfigHostOutputReference Host { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PersistentDirectories`<sup>Required</sup> <a name="PersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesList PersistentDirectories { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `ReadinessChecks`<sup>Required</sup> <a name="ReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks"></a>

```csharp
public WorkstationsWorkstationConfigReadinessChecksList ReadinessChecks { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts"></a>

```csharp
public WorkstationsWorkstationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigAllowedPorts[] AllowedPortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput"></a>

```csharp
public WorkstationsWorkstationConfigContainer ContainerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisableTcpConnectionsInput`<sup>Optional</sup> <a name="DisableTcpConnectionsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput"></a>

```csharp
public bool|IResolvable DisableTcpConnectionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableAuditAgentInput`<sup>Optional</sup> <a name="EnableAuditAgentInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput"></a>

```csharp
public bool|IResolvable EnableAuditAgentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```csharp
public WorkstationsWorkstationConfigEncryptionKey EncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `EphemeralDirectoriesInput`<sup>Optional</sup> <a name="EphemeralDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigEphemeralDirectories[] EphemeralDirectoriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput"></a>

```csharp
public WorkstationsWorkstationConfigHost HostInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxUsableWorkstationsInput`<sup>Optional</sup> <a name="MaxUsableWorkstationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput"></a>

```csharp
public double MaxUsableWorkstationsInput { get; }
```

- *Type:* double

---

##### `PersistentDirectoriesInput`<sup>Optional</sup> <a name="PersistentDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigPersistentDirectories[] PersistentDirectoriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReadinessChecksInput`<sup>Optional</sup> <a name="ReadinessChecksInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigReadinessChecks[] ReadinessChecksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]

---

##### `ReplicaZonesInput`<sup>Optional</sup> <a name="ReplicaZonesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput"></a>

```csharp
public string[] ReplicaZonesInput { get; }
```

- *Type:* string[]

---

##### `RunningTimeoutInput`<sup>Optional</sup> <a name="RunningTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput"></a>

```csharp
public string RunningTimeoutInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```csharp
public string WorkstationConfigIdInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisableTcpConnections`<sup>Required</sup> <a name="DisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections"></a>

```csharp
public bool|IResolvable DisableTcpConnections { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableAuditAgent`<sup>Required</sup> <a name="EnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent"></a>

```csharp
public bool|IResolvable EnableAuditAgent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxUsableWorkstations`<sup>Required</sup> <a name="MaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations"></a>

```csharp
public double MaxUsableWorkstations { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReplicaZones`<sup>Required</sup> <a name="ReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones"></a>

```csharp
public string[] ReplicaZones { get; }
```

- *Type:* string[]

---

##### `RunningTimeout`<sup>Required</sup> <a name="RunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout"></a>

```csharp
public string RunningTimeout { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfigAConfig <a name="WorkstationsWorkstationConfigAConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string WorkstationClusterId,
    string WorkstationConfigId,
    IResolvable|WorkstationsWorkstationConfigAllowedPorts[] AllowedPorts = null,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    WorkstationsWorkstationConfigContainer Container = null,
    string DeletionPolicy = null,
    bool|IResolvable DisableTcpConnections = null,
    string DisplayName = null,
    bool|IResolvable EnableAuditAgent = null,
    WorkstationsWorkstationConfigEncryptionKey EncryptionKey = null,
    IResolvable|WorkstationsWorkstationConfigEphemeralDirectories[] EphemeralDirectories = null,
    WorkstationsWorkstationConfigHost Host = null,
    string Id = null,
    string IdleTimeout = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxUsableWorkstations = null,
    IResolvable|WorkstationsWorkstationConfigPersistentDirectories[] PersistentDirectories = null,
    string Project = null,
    IResolvable|WorkstationsWorkstationConfigReadinessChecks[] ReadinessChecks = null,
    string[] ReplicaZones = null,
    string RunningTimeout = null,
    WorkstationsWorkstationConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location">Location</a></code> | <code>string</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts">AllowedPorts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]</code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections">DisableTcpConnections</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent">EnableAuditAgent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories">EphemeralDirectories</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]</code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host">Host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations">MaxUsableWorkstations</a></code> | <code>double</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories">PersistentDirectories</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks">ReadinessChecks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]</code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones">ReplicaZones</a></code> | <code>string[]</code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout">RunningTimeout</a></code> | <code>string</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; set; }
```

- *Type:* string

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigAllowedPorts[] AllowedPorts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container"></a>

```csharp
public WorkstationsWorkstationConfigContainer Container { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `DisableTcpConnections`<sup>Optional</sup> <a name="DisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections"></a>

```csharp
public bool|IResolvable DisableTcpConnections { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `EnableAuditAgent`<sup>Optional</sup> <a name="EnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent"></a>

```csharp
public bool|IResolvable EnableAuditAgent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```csharp
public WorkstationsWorkstationConfigEncryptionKey EncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `EphemeralDirectories`<sup>Optional</sup> <a name="EphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigEphemeralDirectories[] EphemeralDirectories { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host"></a>

```csharp
public WorkstationsWorkstationConfigHost Host { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `MaxUsableWorkstations`<sup>Optional</sup> <a name="MaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations"></a>

```csharp
public double MaxUsableWorkstations { get; set; }
```

- *Type:* double

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `PersistentDirectories`<sup>Optional</sup> <a name="PersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigPersistentDirectories[] PersistentDirectories { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `ReadinessChecks`<sup>Optional</sup> <a name="ReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigReadinessChecks[] ReadinessChecks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `ReplicaZones`<sup>Optional</sup> <a name="ReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones"></a>

```csharp
public string[] ReplicaZones { get; set; }
```

- *Type:* string[]

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `RunningTimeout`<sup>Optional</sup> <a name="RunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout"></a>

```csharp
public string RunningTimeout { get; set; }
```

- *Type:* string

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```csharp
public WorkstationsWorkstationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

### WorkstationsWorkstationConfigAllowedPorts <a name="WorkstationsWorkstationConfigAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigAllowedPorts {
    double First = null,
    double Last = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first">First</a></code> | <code>double</code> | Starting port number for the current range of ports. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last">Last</a></code> | <code>double</code> | Ending port number for the current range of ports. |

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first"></a>

```csharp
public double First { get; set; }
```

- *Type:* double

Starting port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#first WorkstationsWorkstationConfigA#first}

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last"></a>

```csharp
public double Last { get; set; }
```

- *Type:* double

Ending port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#last WorkstationsWorkstationConfigA#last}

---

### WorkstationsWorkstationConfigConditions <a name="WorkstationsWorkstationConfigConditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigConditions {

};
```


### WorkstationsWorkstationConfigContainer <a name="WorkstationsWorkstationConfigContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigContainer {
    string[] Args = null,
    string[] Command = null,
    System.Collections.Generic.IDictionary<string, string> Env = null,
    string Image = null,
    double RunAsUser = null,
    string WorkingDir = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args">Args</a></code> | <code>string[]</code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command">Command</a></code> | <code>string[]</code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables passed to the container. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image">Image</a></code> | <code>string</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser">RunAsUser</a></code> | <code>double</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir">WorkingDir</a></code> | <code>string</code> | If set, overrides the default DIR specified by the image. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#args WorkstationsWorkstationConfigA#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#command WorkstationsWorkstationConfigA#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#env WorkstationsWorkstationConfigA#env}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#image WorkstationsWorkstationConfigA#image}

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```csharp
public double RunAsUser { get; set; }
```

- *Type:* double

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#run_as_user WorkstationsWorkstationConfigA#run_as_user}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir"></a>

```csharp
public string WorkingDir { get; set; }
```

- *Type:* string

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#working_dir WorkstationsWorkstationConfigA#working_dir}

---

### WorkstationsWorkstationConfigEncryptionKey <a name="WorkstationsWorkstationConfigEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEncryptionKey {
    string KmsKey,
    string KmsKeyServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey">KmsKey</a></code> | <code>string</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account to use with the specified KMS key. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key WorkstationsWorkstationConfigA#kms_key}

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#kms_key_service_account WorkstationsWorkstationConfigA#kms_key_service_account}

---

### WorkstationsWorkstationConfigEphemeralDirectories <a name="WorkstationsWorkstationConfigEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEphemeralDirectories {
    WorkstationsWorkstationConfigEphemeralDirectoriesGcePd GcePd = null,
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath">MountPath</a></code> | <code>string</code> | Location of this directory in the running workstation. |

---

##### `GcePd`<sup>Optional</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd"></a>

```csharp
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd GcePd { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigEphemeralDirectoriesGcePd <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEphemeralDirectoriesGcePd {
    string DiskType = null,
    bool|IResolvable ReadOnly = null,
    string SourceImage = null,
    string SourceSnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType">DiskType</a></code> | <code>string</code> | Type of the disk to use. Defaults to '"pd-standard"'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the disk is read only. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage">SourceImage</a></code> | <code>string</code> | Name of the disk image to use as the source for the disk. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Type of the disk to use. Defaults to '"pd-standard"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the disk is read only.

If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#read_only WorkstationsWorkstationConfigA#read_only}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage"></a>

```csharp
public string SourceImage { get; set; }
```

- *Type:* string

Name of the disk image to use as the source for the disk.

Must be empty 'sourceSnapshot' is set.
Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_image WorkstationsWorkstationConfigA#source_image}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

Name of the snapshot to use as the source for the disk.

Must be empty if 'sourceImage' is set.
Must be empty if 'read_only' is false.
Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigHost <a name="WorkstationsWorkstationConfigHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHost {
    WorkstationsWorkstationConfigHostGceInstance GceInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance">GceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `GceInstance`<sup>Optional</sup> <a name="GceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstance GceInstance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_instance WorkstationsWorkstationConfigA#gce_instance}

---

### WorkstationsWorkstationConfigHostGceInstance <a name="WorkstationsWorkstationConfigHostGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstance {
    IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators[] Accelerators = null,
    IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] BoostConfigs = null,
    double BootDiskSizeGb = null,
    WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig ConfidentialInstanceConfig = null,
    bool|IResolvable DisablePublicIpAddresses = null,
    bool|IResolvable DisableSsh = null,
    bool|IResolvable EnableNestedVirtualization = null,
    System.Collections.Generic.IDictionary<string, string> InstanceMetadata = null,
    string MachineType = null,
    double PoolSize = null,
    string ServiceAccount = null,
    string[] ServiceAccountScopes = null,
    WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    System.Collections.Generic.IDictionary<string, string> VmTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators">Accelerators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs">BoostConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]</code> | boost_configs block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">DisablePublicIpAddresses</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh">DisableSsh</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable SSH access to the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.instanceMetadata">InstanceMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Client-specified metadata key-value pairs, to be passed to the start-up script in the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType">MachineType</a></code> | <code>string</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize">PoolSize</a></code> | <code>double</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | Scopes to grant to the service_account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags">Tags</a></code> | <code>string[]</code> | Network tags to add to the Compute Engine machines backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags">VmTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the VM instances backing the Workstations. |

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators[] Accelerators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `BoostConfigs`<sup>Optional</sup> <a name="BoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] BoostConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]

boost_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boost_configs WorkstationsWorkstationConfigA#boost_configs}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig ConfidentialInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#confidential_instance_config WorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `DisablePublicIpAddresses`<sup>Optional</sup> <a name="DisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```csharp
public bool|IResolvable DisablePublicIpAddresses { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_public_ip_addresses WorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `DisableSsh`<sup>Optional</sup> <a name="DisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh"></a>

```csharp
public bool|IResolvable DisableSsh { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable SSH access to the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disable_ssh WorkstationsWorkstationConfigA#disable_ssh}

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `InstanceMetadata`<sup>Optional</sup> <a name="InstanceMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.instanceMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InstanceMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Client-specified metadata key-value pairs, to be passed to the start-up script in the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#instance_metadata WorkstationsWorkstationConfigA#instance_metadata}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```csharp
public double PoolSize { get; set; }
```

- *Type:* double

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account WorkstationsWorkstationConfigA#service_account}

---

##### `ServiceAccountScopes`<sup>Optional</sup> <a name="ServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; set; }
```

- *Type:* string[]

Scopes to grant to the service_account.

Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#service_account_scopes WorkstationsWorkstationConfigA#service_account_scopes}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#shielded_instance_config WorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#tags WorkstationsWorkstationConfigA#tags}

---

##### `VmTags`<sup>Optional</sup> <a name="VmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VmTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the VM instances backing the Workstations.

Tag keys and values have the same definition as
https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
Keys must be in the format 'tagKeys/{tag_key_id}', and
values are in the format 'tagValues/456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#vm_tags WorkstationsWorkstationConfigA#vm_tags}

---

### WorkstationsWorkstationConfigHostGceInstanceAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceAccelerators {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count">Count</a></code> | <code>double</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type">Type</a></code> | <code>string</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigs <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigs {
    string Id,
    IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] Accelerators = null,
    double BootDiskSizeGb = null,
    bool|IResolvable EnableNestedVirtualization = null,
    string MachineType = null,
    double PoolSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id">Id</a></code> | <code>string</code> | The id to be used for the boost config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators">Accelerators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType">MachineType</a></code> | <code>string</code> | The type of machine that boosted VM instances will use—for example, e2-standard-4. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize">PoolSize</a></code> | <code>double</code> | Number of instances to pool for faster workstation boosting. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The id to be used for the boost config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] Accelerators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of machine that boosted VM instances will use—for example, e2-standard-4.

For more information about machine types that Cloud Workstations supports, see the list of available machine types https://cloud.google.com/workstations/docs/available-machine-types. Defaults to e2-standard-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize"></a>

```csharp
public double PoolSize { get; set; }
```

- *Type:* double

Number of instances to pool for faster workstation boosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count">Count</a></code> | <code>double</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type">Type</a></code> | <code>string</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig {
    bool|IResolvable EnableConfidentialCompute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the instance has confidential compute enabled. |

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```csharp
public bool|IResolvable EnableConfidentialCompute { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_confidential_compute WorkstationsWorkstationConfigA#enable_confidential_compute}

---

### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig {
    bool|IResolvable EnableIntegrityMonitoring = null,
    bool|IResolvable EnableSecureBoot = null,
    bool|IResolvable EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the instance has the vTPM enabled. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public bool|IResolvable EnableIntegrityMonitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_integrity_monitoring WorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public bool|IResolvable EnableSecureBoot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_secure_boot WorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public bool|IResolvable EnableVtpm { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#enable_vtpm WorkstationsWorkstationConfigA#enable_vtpm}

---

### WorkstationsWorkstationConfigPersistentDirectories <a name="WorkstationsWorkstationConfigPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectories {
    WorkstationsWorkstationConfigPersistentDirectoriesGceHd GceHd = null,
    WorkstationsWorkstationConfigPersistentDirectoriesGcePd GcePd = null,
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd">GceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | gce_hd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath">MountPath</a></code> | <code>string</code> | Location of this directory in the running workstation. |

---

##### `GceHd`<sup>Optional</sup> <a name="GceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd GceHd { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

gce_hd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_hd WorkstationsWorkstationConfigA#gce_hd}

---

##### `GcePd`<sup>Optional</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd GcePd { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGceHd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesGceHd {
    string ArchiveTimeout = null,
    string ReclaimPolicy = null,
    double SizeGb = null,
    string SourceSnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout">ArchiveTimeout</a></code> | <code>string</code> | How long to wait before converting the disk into a snapshot. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb">SizeGb</a></code> | <code>double</code> | The GB capacity of a persistent home directory. Defaults to '200'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `ArchiveTimeout`<sup>Optional</sup> <a name="ArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout"></a>

```csharp
public string ArchiveTimeout { get; set; }
```

- *Type:* string

How long to wait before converting the disk into a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#archive_timeout WorkstationsWorkstationConfigA#archive_timeout}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; set; }
```

- *Type:* string

Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

The GB capacity of a persistent home directory. Defaults to '200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

Name of the snapshot to use as the source for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesGcePd {
    string DiskType = null,
    string FsType = null,
    string ReclaimPolicy = null,
    double SizeGb = null,
    string SourceSnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">DiskType</a></code> | <code>string</code> | The type of the persistent disk for the home directory. Defaults to 'pd-standard'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">FsType</a></code> | <code>string</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | Whether the persistent disk should be deleted when the workstation is deleted. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">SizeGb</a></code> | <code>double</code> | The GB capacity of a persistent home directory for each workstation created with this configuration. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of the persistent disk for the home directory. Defaults to 'pd-standard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#fs_type WorkstationsWorkstationConfigA#fs_type}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; set; }
```

- *Type:* string

Whether the persistent disk should be deleted when the workstation is deleted.

Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

The GB capacity of a persistent home directory for each workstation created with this configuration.

Must be empty if 'sourceSnapshot' is set.
Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

Name of the snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigReadinessChecks <a name="WorkstationsWorkstationConfigReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigReadinessChecks {
    string Path,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path">Path</a></code> | <code>string</code> | Path to which the request should be sent. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port">Port</a></code> | <code>double</code> | Port to which the request should be sent. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#path WorkstationsWorkstationConfigA#path}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#port WorkstationsWorkstationConfigA#port}

---

### WorkstationsWorkstationConfigTimeouts <a name="WorkstationsWorkstationConfigTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationConfigAllowedPortsList <a name="WorkstationsWorkstationConfigAllowedPortsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigAllowedPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get"></a>

```csharp
private WorkstationsWorkstationConfigAllowedPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigAllowedPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>[]

---


### WorkstationsWorkstationConfigAllowedPortsOutputReference <a name="WorkstationsWorkstationConfigAllowedPortsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigAllowedPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast">ResetLast</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst"></a>

```csharp
private void ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput">FirstInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput">LastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput"></a>

```csharp
public double FirstInput { get; }
```

- *Type:* double

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput"></a>

```csharp
public double LastInput { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigAllowedPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts">WorkstationsWorkstationConfigAllowedPorts</a>

---


### WorkstationsWorkstationConfigConditionsList <a name="WorkstationsWorkstationConfigConditionsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get"></a>

```csharp
private WorkstationsWorkstationConfigConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkstationsWorkstationConfigConditionsOutputReference <a name="WorkstationsWorkstationConfigConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a>

---


### WorkstationsWorkstationConfigContainerOutputReference <a name="WorkstationsWorkstationConfigContainerOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```csharp
private void ResetRunAsUser()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```csharp
private void ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput">EnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">RunAsUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir">WorkingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```csharp
public double RunAsUserInput { get; }
```

- *Type:* double

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```csharp
public string WorkingDirInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```csharp
public double RunAsUser { get; }
```

- *Type:* double

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```csharp
public string WorkingDir { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---


### WorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="WorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage"></a>

```csharp
private void ResetSourceImage()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput">SourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage">SourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput"></a>

```csharp
public string SourceImageInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage"></a>

```csharp
public string SourceImage { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesList <a name="WorkstationsWorkstationConfigEphemeralDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEphemeralDirectoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get"></a>

```csharp
private WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigEphemeralDirectories[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>[]

---


### WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd">PutGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd">ResetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcePd` <a name="PutGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd"></a>

```csharp
private void PutGcePd(WorkstationsWorkstationConfigEphemeralDirectoriesGcePd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `ResetGcePd` <a name="ResetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd"></a>

```csharp
private void ResetGcePd()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput">GcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcePd`<sup>Required</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd"></a>

```csharp
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference GcePd { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a>

---

##### `GcePdInput`<sup>Optional</sup> <a name="GcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput"></a>

```csharp
public WorkstationsWorkstationConfigEphemeralDirectoriesGcePd GcePdInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigEphemeralDirectories InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories">WorkstationsWorkstationConfigEphemeralDirectories</a>

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get"></a>

```csharp
private WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get"></a>

```csharp
private WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get"></a>

```csharp
private WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize">ResetPoolSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators"></a>

```csharp
private void PutAccelerators(IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize"></a>

```csharp
private void ResetPoolSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a>

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] AcceleratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators</a>[]

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public bool|IResolvable EnableNestedVirtualizationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput"></a>

```csharp
public double PoolSizeInput { get; }
```

- *Type:* double

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>

---


### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public bool|IResolvable EnableConfidentialComputeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```csharp
public bool|IResolvable EnableConfidentialCompute { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs">PutBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs">ResetBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">ResetDisablePublicIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh">ResetDisableSsh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetInstanceMetadata">ResetInstanceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">ResetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes">ResetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags">ResetVmTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators"></a>

```csharp
private void PutAccelerators(IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]

---

##### `PutBoostConfigs` <a name="PutBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs"></a>

```csharp
private void PutBoostConfigs(IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```csharp
private void PutConfidentialInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetBoostConfigs` <a name="ResetBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs"></a>

```csharp
private void ResetBoostConfigs()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```csharp
private void ResetConfidentialInstanceConfig()
```

##### `ResetDisablePublicIpAddresses` <a name="ResetDisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```csharp
private void ResetDisablePublicIpAddresses()
```

##### `ResetDisableSsh` <a name="ResetDisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh"></a>

```csharp
private void ResetDisableSsh()
```

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetInstanceMetadata` <a name="ResetInstanceMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetInstanceMetadata"></a>

```csharp
private void ResetInstanceMetadata()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```csharp
private void ResetPoolSize()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetServiceAccountScopes` <a name="ResetServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes"></a>

```csharp
private void ResetServiceAccountScopes()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmTags` <a name="ResetVmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags"></a>

```csharp
private void ResetVmTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs">BoostConfigs</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput">BoostConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">DisablePublicIpAddressesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput">DisableSshInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadataInput">InstanceMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput">ServiceAccountScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput">VmTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">DisablePublicIpAddresses</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh">DisableSsh</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadata">InstanceMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags">VmTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a>

---

##### `BoostConfigs`<sup>Required</sup> <a name="BoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList BoostConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference ConfidentialInstanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceAccelerators[] AcceleratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators">WorkstationsWorkstationConfigHostGceInstanceAccelerators</a>[]

---

##### `BoostConfigsInput`<sup>Optional</sup> <a name="BoostConfigsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] BoostConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs">WorkstationsWorkstationConfigHostGceInstanceBoostConfigs</a>[]

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig ConfidentialInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `DisablePublicIpAddressesInput`<sup>Optional</sup> <a name="DisablePublicIpAddressesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```csharp
public bool|IResolvable DisablePublicIpAddressesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableSshInput`<sup>Optional</sup> <a name="DisableSshInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput"></a>

```csharp
public bool|IResolvable DisableSshInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public bool|IResolvable EnableNestedVirtualizationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceMetadataInput`<sup>Optional</sup> <a name="InstanceMetadataInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InstanceMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```csharp
public double PoolSizeInput { get; }
```

- *Type:* double

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccountScopesInput`<sup>Optional</sup> <a name="ServiceAccountScopesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput"></a>

```csharp
public string[] ServiceAccountScopesInput { get; }
```

- *Type:* string[]

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `VmTagsInput`<sup>Optional</sup> <a name="VmTagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VmTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `DisablePublicIpAddresses`<sup>Required</sup> <a name="DisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```csharp
public bool|IResolvable DisablePublicIpAddresses { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableSsh`<sup>Required</sup> <a name="DisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh"></a>

```csharp
public bool|IResolvable DisableSsh { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceMetadata`<sup>Required</sup> <a name="InstanceMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.instanceMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InstanceMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceAccountScopes`<sup>Required</sup> <a name="ServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `VmTags`<sup>Required</sup> <a name="VmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VmTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---


### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public bool|IResolvable EnableIntegrityMonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public bool|IResolvable EnableSecureBootInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public bool|IResolvable EnableVtpmInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public bool|IResolvable EnableIntegrityMonitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public bool|IResolvable EnableSecureBoot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public bool|IResolvable EnableVtpm { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostOutputReference <a name="WorkstationsWorkstationConfigHostOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance">PutGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance">ResetGceInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGceInstance` <a name="PutGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```csharp
private void PutGceInstance(WorkstationsWorkstationConfigHostGceInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `ResetGceInstance` <a name="ResetGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```csharp
private void ResetGceInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance">GceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">GceInstanceInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GceInstance`<sup>Required</sup> <a name="GceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstanceOutputReference GceInstance { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `GceInstanceInput`<sup>Optional</sup> <a name="GceInstanceInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```csharp
public WorkstationsWorkstationConfigHostGceInstance GceInstanceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigHost InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout">ResetArchiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveTimeout` <a name="ResetArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout"></a>

```csharp
private void ResetArchiveTimeout()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy"></a>

```csharp
private void ResetReclaimPolicy()
```

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb"></a>

```csharp
private void ResetSizeGb()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput">ArchiveTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout">ArchiveTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveTimeoutInput`<sup>Optional</sup> <a name="ArchiveTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput"></a>

```csharp
public string ArchiveTimeoutInput { get; }
```

- *Type:* string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput"></a>

```csharp
public string ReclaimPolicyInput { get; }
```

- *Type:* string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `ArchiveTimeout`<sup>Required</sup> <a name="ArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout"></a>

```csharp
public string ArchiveTimeout { get; }
```

- *Type:* string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetFsType` <a name="ResetFsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```csharp
private void ResetReclaimPolicy()
```

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```csharp
private void ResetSizeGb()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```csharp
public string ReclaimPolicyInput { get; }
```

- *Type:* string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesList <a name="WorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```csharp
private WorkstationsWorkstationConfigPersistentDirectoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigPersistentDirectories[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>[]

---


### WorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigPersistentDirectoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd">PutGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">PutGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd">ResetGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">ResetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGceHd` <a name="PutGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd"></a>

```csharp
private void PutGceHd(WorkstationsWorkstationConfigPersistentDirectoriesGceHd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `PutGcePd` <a name="PutGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```csharp
private void PutGcePd(WorkstationsWorkstationConfigPersistentDirectoriesGcePd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `ResetGceHd` <a name="ResetGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd"></a>

```csharp
private void ResetGceHd()
```

##### `ResetGcePd` <a name="ResetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```csharp
private void ResetGcePd()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd">GceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput">GceHdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">GcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GceHd`<sup>Required</sup> <a name="GceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference GceHd { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a>

---

##### `GcePd`<sup>Required</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference GcePd { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `GceHdInput`<sup>Optional</sup> <a name="GceHdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGceHd GceHdInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `GcePdInput`<sup>Optional</sup> <a name="GcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```csharp
public WorkstationsWorkstationConfigPersistentDirectoriesGcePd GcePdInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigPersistentDirectories InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories">WorkstationsWorkstationConfigPersistentDirectories</a>

---


### WorkstationsWorkstationConfigReadinessChecksList <a name="WorkstationsWorkstationConfigReadinessChecksList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigReadinessChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get"></a>

```csharp
private WorkstationsWorkstationConfigReadinessChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigReadinessChecks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>[]

---


### WorkstationsWorkstationConfigReadinessChecksOutputReference <a name="WorkstationsWorkstationConfigReadinessChecksOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigReadinessChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigReadinessChecks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks">WorkstationsWorkstationConfigReadinessChecks</a>

---


### WorkstationsWorkstationConfigTimeoutsOutputReference <a name="WorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---



