# `workstationsWorkstationCluster` Submodule <a name="`workstationsWorkstationCluster` Submodule" id="@cdktn/provider-google.workstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationCluster <a name="WorkstationsWorkstationCluster" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationCluster(Construct Scope, string Id, WorkstationsWorkstationClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig">WorkstationsWorkstationClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig">WorkstationsWorkstationClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig">PutDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig">PutPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig">ResetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig">ResetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">ResetWorkstationAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl">ResetWorkstationLaunchUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainConfig` <a name="PutDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig"></a>

```csharp
private void PutDomainConfig(WorkstationsWorkstationClusterDomainConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `PutPrivateClusterConfig` <a name="PutPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```csharp
private void PutPrivateClusterConfig(WorkstationsWorkstationClusterPrivateClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkstationsWorkstationClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomainConfig` <a name="ResetDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig"></a>

```csharp
private void ResetDomainConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPrivateClusterConfig` <a name="ResetPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```csharp
private void ResetPrivateClusterConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkstationAuthorizationUrl` <a name="ResetWorkstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```csharp
private void ResetWorkstationAuthorizationUrl()
```

##### `ResetWorkstationLaunchUrl` <a name="ResetWorkstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```csharp
private void ResetWorkstationLaunchUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkstationsWorkstationCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp">ControlPlaneIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded">Degraded</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput">DomainConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput">PrivateClusterConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">WorkstationAuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput">WorkstationLaunchUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl">WorkstationAuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl">WorkstationLaunchUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions"></a>

```csharp
public WorkstationsWorkstationClusterConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a>

---

##### `ControlPlaneIp`<sup>Required</sup> <a name="ControlPlaneIp" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```csharp
public string ControlPlaneIp { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Degraded`<sup>Required</sup> <a name="Degraded" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded"></a>

```csharp
public IResolvable Degraded { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DomainConfig`<sup>Required</sup> <a name="DomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig"></a>

```csharp
public WorkstationsWorkstationClusterDomainConfigOutputReference DomainConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateClusterConfig`<sup>Required</sup> <a name="PrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```csharp
public WorkstationsWorkstationClusterPrivateClusterConfigOutputReference PrivateClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts"></a>

```csharp
public WorkstationsWorkstationClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainConfigInput`<sup>Optional</sup> <a name="DomainConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput"></a>

```csharp
public WorkstationsWorkstationClusterDomainConfig DomainConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateClusterConfigInput`<sup>Optional</sup> <a name="PrivateClusterConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```csharp
public WorkstationsWorkstationClusterPrivateClusterConfig PrivateClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|WorkstationsWorkstationClusterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `WorkstationAuthorizationUrlInput`<sup>Optional</sup> <a name="WorkstationAuthorizationUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```csharp
public string WorkstationAuthorizationUrlInput { get; }
```

- *Type:* string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationLaunchUrlInput`<sup>Optional</sup> <a name="WorkstationLaunchUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```csharp
public string WorkstationLaunchUrlInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkstationAuthorizationUrl`<sup>Required</sup> <a name="WorkstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```csharp
public string WorkstationAuthorizationUrl { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationLaunchUrl`<sup>Required</sup> <a name="WorkstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```csharp
public string WorkstationLaunchUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationClusterConditions <a name="WorkstationsWorkstationClusterConditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterConditions {

};
```


### WorkstationsWorkstationClusterConfig <a name="WorkstationsWorkstationClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Network,
    string Subnetwork,
    string WorkstationClusterId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    WorkstationsWorkstationClusterDomainConfig DomainConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    WorkstationsWorkstationClusterPrivateClusterConfig PrivateClusterConfig = null,
    string Project = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WorkstationsWorkstationClusterTimeouts Timeouts = null,
    string WorkstationAuthorizationUrl = null,
    string WorkstationLaunchUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network">Network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork">Subnetwork</a></code> | <code>string</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location">Location</a></code> | <code>string</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">WorkstationAuthorizationUrl</a></code> | <code>string</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">WorkstationLaunchUrl</a></code> | <code>string</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `DomainConfig`<sup>Optional</sup> <a name="DomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```csharp
public WorkstationsWorkstationClusterDomainConfig DomainConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `PrivateClusterConfig`<sup>Optional</sup> <a name="PrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```csharp
public WorkstationsWorkstationClusterPrivateClusterConfig PrivateClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts"></a>

```csharp
public WorkstationsWorkstationClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `WorkstationAuthorizationUrl`<sup>Optional</sup> <a name="WorkstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```csharp
public string WorkstationAuthorizationUrl { get; set; }
```

- *Type:* string

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `WorkstationLaunchUrl`<sup>Optional</sup> <a name="WorkstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```csharp
public string WorkstationLaunchUrl { get; set; }
```

- *Type:* string

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

### WorkstationsWorkstationClusterDomainConfig <a name="WorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterDomainConfig {
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain">Domain</a></code> | <code>string</code> | Domain used by Workstations for HTTP ingress. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#domain WorkstationsWorkstationCluster#domain}

---

### WorkstationsWorkstationClusterPrivateClusterConfig <a name="WorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterPrivateClusterConfig {
    bool|IResolvable EnablePrivateEndpoint,
    string[] AllowedProjects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">AllowedProjects</a></code> | <code>string[]</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```csharp
public bool|IResolvable EnablePrivateEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#enable_private_endpoint WorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `AllowedProjects`<sup>Optional</sup> <a name="AllowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```csharp
public string[] AllowedProjects { get; set; }
```

- *Type:* string[]

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#allowed_projects WorkstationsWorkstationCluster#allowed_projects}

---

### WorkstationsWorkstationClusterTimeouts <a name="WorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationClusterConditionsList <a name="WorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get"></a>

```csharp
private WorkstationsWorkstationClusterConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkstationsWorkstationClusterConditionsOutputReference <a name="WorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationClusterConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a>

---


### WorkstationsWorkstationClusterDomainConfigOutputReference <a name="WorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterDomainConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationClusterDomainConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---


### WorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="WorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterPrivateClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">ResetAllowedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedProjects` <a name="ResetAllowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```csharp
private void ResetAllowedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">ClusterHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">ServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">AllowedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">EnablePrivateEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">AllowedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterHostname`<sup>Required</sup> <a name="ClusterHostname" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```csharp
public string ClusterHostname { get; }
```

- *Type:* string

---

##### `ServiceAttachmentUri`<sup>Required</sup> <a name="ServiceAttachmentUri" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```csharp
public string ServiceAttachmentUri { get; }
```

- *Type:* string

---

##### `AllowedProjectsInput`<sup>Optional</sup> <a name="AllowedProjectsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```csharp
public string[] AllowedProjectsInput { get; }
```

- *Type:* string[]

---

##### `EnablePrivateEndpointInput`<sup>Optional</sup> <a name="EnablePrivateEndpointInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```csharp
public bool|IResolvable EnablePrivateEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedProjects`<sup>Required</sup> <a name="AllowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```csharp
public string[] AllowedProjects { get; }
```

- *Type:* string[]

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```csharp
public bool|IResolvable EnablePrivateEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationClusterPrivateClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### WorkstationsWorkstationClusterTimeoutsOutputReference <a name="WorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkstationsWorkstationClusterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---



