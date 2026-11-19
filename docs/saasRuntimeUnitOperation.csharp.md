# `saasRuntimeUnitOperation` Submodule <a name="`saasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google.saasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitOperation <a name="SaasRuntimeUnitOperation" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperation(Construct Scope, string Id, SaasRuntimeUnitOperationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision">PutDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision">PutProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision">ResetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision">ResetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade">ResetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion">ResetWaitForCompletion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeprovision` <a name="PutDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision"></a>

```csharp
private void PutDeprovision(SaasRuntimeUnitOperationDeprovision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `PutProvision` <a name="PutProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision"></a>

```csharp
private void PutProvision(SaasRuntimeUnitOperationProvision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts"></a>

```csharp
private void PutTimeouts(SaasRuntimeUnitOperationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade"></a>

```csharp
private void PutUpgrade(SaasRuntimeUnitOperationUpgrade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeprovision` <a name="ResetDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision"></a>

```csharp
private void ResetDeprovision()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProvision` <a name="ResetProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision"></a>

```csharp
private void ResetProvision()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgrade` <a name="ResetUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade"></a>

```csharp
private void ResetUpgrade()
```

##### `ResetWaitForCompletion` <a name="ResetWaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```csharp
private void ResetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnitOperation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnitOperation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnitOperation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnitOperation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeUnitOperation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState">EngineState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory">ErrorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput">DeprovisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput">ProvisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput">UnitOperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput">WaitForCompletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId">UnitOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion">WaitForCompletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions"></a>

```csharp
public SaasRuntimeUnitOperationConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deprovision`<sup>Required</sup> <a name="Deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision"></a>

```csharp
public SaasRuntimeUnitOperationDeprovisionOutputReference Deprovision { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EngineState`<sup>Required</sup> <a name="EngineState" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState"></a>

```csharp
public string EngineState { get; }
```

- *Type:* string

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory"></a>

```csharp
public string ErrorCategory { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provision`<sup>Required</sup> <a name="Provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision"></a>

```csharp
public SaasRuntimeUnitOperationProvisionOutputReference Provision { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts"></a>

```csharp
public SaasRuntimeUnitOperationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade"></a>

```csharp
public SaasRuntimeUnitOperationUpgradeOutputReference Upgrade { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeprovisionInput`<sup>Optional</sup> <a name="DeprovisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput"></a>

```csharp
public SaasRuntimeUnitOperationDeprovision DeprovisionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvisionInput`<sup>Optional</sup> <a name="ProvisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput"></a>

```csharp
public SaasRuntimeUnitOperationProvision ProvisionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `UnitOperationIdInput`<sup>Optional</sup> <a name="UnitOperationIdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```csharp
public string UnitOperationIdInput { get; }
```

- *Type:* string

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput"></a>

```csharp
public SaasRuntimeUnitOperationUpgrade UpgradeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `WaitForCompletionInput`<sup>Optional</sup> <a name="WaitForCompletionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```csharp
public bool|IResolvable WaitForCompletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId"></a>

```csharp
public string UnitOperationId { get; }
```

- *Type:* string

---

##### `WaitForCompletion`<sup>Required</sup> <a name="WaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion"></a>

```csharp
public bool|IResolvable WaitForCompletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitOperationConditions <a name="SaasRuntimeUnitOperationConditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationConditions {

};
```


### SaasRuntimeUnitOperationConfig <a name="SaasRuntimeUnitOperationConfig" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Unit,
    string UnitOperationId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    SaasRuntimeUnitOperationDeprovision Deprovision = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    SaasRuntimeUnitOperationProvision Provision = null,
    SaasRuntimeUnitOperationTimeouts Timeouts = null,
    SaasRuntimeUnitOperationUpgrade Upgrade = null,
    bool|IResolvable WaitForCompletion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit">Unit</a></code> | <code>string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId">UnitOperationId</a></code> | <code>string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion">WaitForCompletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```csharp
public string UnitOperationId { get; set; }
```

- *Type:* string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `Deprovision`<sup>Optional</sup> <a name="Deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision"></a>

```csharp
public SaasRuntimeUnitOperationDeprovision Deprovision { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `Provision`<sup>Optional</sup> <a name="Provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision"></a>

```csharp
public SaasRuntimeUnitOperationProvision Provision { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts"></a>

```csharp
public SaasRuntimeUnitOperationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `Upgrade`<sup>Optional</sup> <a name="Upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade"></a>

```csharp
public SaasRuntimeUnitOperationUpgrade Upgrade { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `WaitForCompletion`<sup>Optional</sup> <a name="WaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```csharp
public bool|IResolvable WaitForCompletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

### SaasRuntimeUnitOperationDeprovision <a name="SaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationDeprovision {

};
```


### SaasRuntimeUnitOperationProvision <a name="SaasRuntimeUnitOperationProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationProvision {
    IResolvable|SaasRuntimeUnitOperationProvisionInputVariables[] InputVariables = null,
    string Release = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables">InputVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release">Release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationProvisionInputVariables[] InputVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release"></a>

```csharp
public string Release { get; set; }
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationProvisionInputVariables <a name="SaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationProvisionInputVariables {
    string Variable,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable">Variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type">Type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value">Value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

### SaasRuntimeUnitOperationTimeouts <a name="SaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

### SaasRuntimeUnitOperationUpgrade <a name="SaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationUpgrade {
    IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables[] InputVariables = null,
    string Release = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables">InputVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release">Release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables[] InputVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release"></a>

```csharp
public string Release { get; set; }
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationUpgradeInputVariables <a name="SaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationUpgradeInputVariables {
    string Variable,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable">Variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type">Type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value">Value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitOperationConditionsList <a name="SaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get"></a>

```csharp
private SaasRuntimeUnitOperationConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitOperationConditionsOutputReference <a name="SaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitOperationConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a>

---


### SaasRuntimeUnitOperationDeprovisionOutputReference <a name="SaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationDeprovisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitOperationDeprovision InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---


### SaasRuntimeUnitOperationProvisionInputVariablesList <a name="SaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationProvisionInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```csharp
private SaasRuntimeUnitOperationProvisionInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationProvisionInputVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---


### SaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="SaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationProvisionInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationProvisionInputVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>

---


### SaasRuntimeUnitOperationProvisionOutputReference <a name="SaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationProvisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```csharp
private void PutInputVariables(IResolvable|SaasRuntimeUnitOperationProvisionInputVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```csharp
private void ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```csharp
private void ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release">Release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```csharp
public SaasRuntimeUnitOperationProvisionInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationProvisionInputVariables[] InputVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```csharp
public string ReleaseInput { get; }
```

- *Type:* string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```csharp
public string Release { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitOperationProvision InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---


### SaasRuntimeUnitOperationTimeoutsOutputReference <a name="SaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---


### SaasRuntimeUnitOperationUpgradeInputVariablesList <a name="SaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationUpgradeInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```csharp
private SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---


### SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### SaasRuntimeUnitOperationUpgradeOutputReference <a name="SaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOperationUpgradeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```csharp
private void PutInputVariables(IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```csharp
private void ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```csharp
private void ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release">Release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```csharp
public SaasRuntimeUnitOperationUpgradeInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```csharp
public IResolvable|SaasRuntimeUnitOperationUpgradeInputVariables[] InputVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```csharp
public string ReleaseInput { get; }
```

- *Type:* string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```csharp
public string Release { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitOperationUpgrade InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---



