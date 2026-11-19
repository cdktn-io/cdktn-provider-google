# `saasRuntimeRelease` Submodule <a name="`saasRuntimeRelease` Submodule" id="@cdktn/provider-google.saasRuntimeRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRelease <a name="SaasRuntimeRelease" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release google_saas_runtime_release}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeRelease(Construct Scope, string Id, SaasRuntimeReleaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig">SaasRuntimeReleaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig">SaasRuntimeReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint">PutBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults">PutInputVariableDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements">PutReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint">ResetBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults">ResetInputVariableDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements">ResetReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlueprint` <a name="PutBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint"></a>

```csharp
private void PutBlueprint(SaasRuntimeReleaseBlueprint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---

##### `PutInputVariableDefaults` <a name="PutInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults"></a>

```csharp
private void PutInputVariableDefaults(IResolvable|SaasRuntimeReleaseInputVariableDefaults[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---

##### `PutReleaseRequirements` <a name="PutReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements"></a>

```csharp
private void PutReleaseRequirements(SaasRuntimeReleaseReleaseRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts"></a>

```csharp
private void PutTimeouts(SaasRuntimeReleaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBlueprint` <a name="ResetBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint"></a>

```csharp
private void ResetBlueprint()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputVariableDefaults` <a name="ResetInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults"></a>

```csharp
private void ResetInputVariableDefaults()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReleaseRequirements` <a name="ResetReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements"></a>

```csharp
private void ResetReleaseRequirements()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeRelease.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeRelease.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeRelease.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeRelease.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeRelease to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent">ApplicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint">Blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults">InputVariableDefaults</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables">OutputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements">ReleaseRequirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput">BlueprintInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput">InputVariableDefaultsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput">ReleaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput">ReleaseRequirementsInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput">UnitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId">ReleaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind">UnitKind</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationTemplateComponent`<sup>Required</sup> <a name="ApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent"></a>

```csharp
public SaasRuntimeReleaseApplicationTemplateComponentList ApplicationTemplateComponent { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a>

---

##### `Blueprint`<sup>Required</sup> <a name="Blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint"></a>

```csharp
public SaasRuntimeReleaseBlueprintOutputReference Blueprint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `InputVariableDefaults`<sup>Required</sup> <a name="InputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults"></a>

```csharp
public SaasRuntimeReleaseInputVariableDefaultsList InputVariableDefaults { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a>

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables"></a>

```csharp
public SaasRuntimeReleaseInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables"></a>

```csharp
public SaasRuntimeReleaseOutputVariablesList OutputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a>

---

##### `ReleaseRequirements`<sup>Required</sup> <a name="ReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements"></a>

```csharp
public SaasRuntimeReleaseReleaseRequirementsOutputReference ReleaseRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts"></a>

```csharp
public SaasRuntimeReleaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BlueprintInput`<sup>Optional</sup> <a name="BlueprintInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput"></a>

```csharp
public SaasRuntimeReleaseBlueprint BlueprintInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputVariableDefaultsInput`<sup>Optional</sup> <a name="InputVariableDefaultsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput"></a>

```csharp
public IResolvable|SaasRuntimeReleaseInputVariableDefaults[] InputVariableDefaultsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReleaseIdInput`<sup>Optional</sup> <a name="ReleaseIdInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput"></a>

```csharp
public string ReleaseIdInput { get; }
```

- *Type:* string

---

##### `ReleaseRequirementsInput`<sup>Optional</sup> <a name="ReleaseRequirementsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput"></a>

```csharp
public SaasRuntimeReleaseReleaseRequirements ReleaseRequirementsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput"></a>

```csharp
public IResolvable|SaasRuntimeReleaseTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput"></a>

```csharp
public string UnitKindInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReleaseId`<sup>Required</sup> <a name="ReleaseId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId"></a>

```csharp
public string ReleaseId { get; }
```

- *Type:* string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind"></a>

```csharp
public string UnitKind { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeReleaseApplicationTemplateComponent <a name="SaasRuntimeReleaseApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponent {

};
```


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRef <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponentCompositeRef {

};
```


### SaasRuntimeReleaseBlueprint <a name="SaasRuntimeReleaseBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseBlueprint {
    string Package = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package">Package</a></code> | <code>string</code> | URI to a blueprint used by the Unit (required unless unitKind or release is set). |

---

##### `Package`<sup>Optional</sup> <a name="Package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

URI to a blueprint used by the Unit (required unless unitKind or release is set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#package SaasRuntimeRelease#package}

---

### SaasRuntimeReleaseConfig <a name="SaasRuntimeReleaseConfig" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string ReleaseId,
    string UnitKind,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    SaasRuntimeReleaseBlueprint Blueprint = null,
    string DeletionPolicy = null,
    string Id = null,
    IResolvable|SaasRuntimeReleaseInputVariableDefaults[] InputVariableDefaults = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    SaasRuntimeReleaseReleaseRequirements ReleaseRequirements = null,
    SaasRuntimeReleaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId">ReleaseId</a></code> | <code>string</code> | The ID value for the new release. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind">UnitKind</a></code> | <code>string</code> | Reference to the UnitKind this Release corresponds to (required and immutable once created). |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint">Blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | blueprint block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults">InputVariableDefaults</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | input_variable_defaults block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements">ReleaseRequirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | release_requirements block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#location SaasRuntimeRelease#location}

---

##### `ReleaseId`<sup>Required</sup> <a name="ReleaseId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId"></a>

```csharp
public string ReleaseId { get; set; }
```

- *Type:* string

The ID value for the new release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_id SaasRuntimeRelease#release_id}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind"></a>

```csharp
public string UnitKind { get; set; }
```

- *Type:* string

Reference to the UnitKind this Release corresponds to (required and immutable once created).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#unit_kind SaasRuntimeRelease#unit_kind}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#annotations SaasRuntimeRelease#annotations}

---

##### `Blueprint`<sup>Optional</sup> <a name="Blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint"></a>

```csharp
public SaasRuntimeReleaseBlueprint Blueprint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#blueprint SaasRuntimeRelease#blueprint}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#deletion_policy SaasRuntimeRelease#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputVariableDefaults`<sup>Optional</sup> <a name="InputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults"></a>

```csharp
public IResolvable|SaasRuntimeReleaseInputVariableDefaults[] InputVariableDefaults { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

input_variable_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#input_variable_defaults SaasRuntimeRelease#input_variable_defaults}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#labels SaasRuntimeRelease#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}.

---

##### `ReleaseRequirements`<sup>Optional</sup> <a name="ReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements"></a>

```csharp
public SaasRuntimeReleaseReleaseRequirements ReleaseRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

release_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_requirements SaasRuntimeRelease#release_requirements}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts"></a>

```csharp
public SaasRuntimeReleaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#timeouts SaasRuntimeRelease#timeouts}

---

### SaasRuntimeReleaseInputVariableDefaults <a name="SaasRuntimeReleaseInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariableDefaults {
    string Variable,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable">Variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type">Type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"]. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value">Value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#variable SaasRuntimeRelease#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#type SaasRuntimeRelease#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#value SaasRuntimeRelease#value}

---

### SaasRuntimeReleaseInputVariables <a name="SaasRuntimeReleaseInputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariables {

};
```


### SaasRuntimeReleaseOutputVariables <a name="SaasRuntimeReleaseOutputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseOutputVariables {

};
```


### SaasRuntimeReleaseReleaseRequirements <a name="SaasRuntimeReleaseReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseReleaseRequirements {
    string[] UpgradeableFromReleases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases">UpgradeableFromReleases</a></code> | <code>string[]</code> | A list of releases from which a unit can be upgraded to this one (optional). |

---

##### `UpgradeableFromReleases`<sup>Optional</sup> <a name="UpgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases"></a>

```csharp
public string[] UpgradeableFromReleases { get; set; }
```

- *Type:* string[]

A list of releases from which a unit can be upgraded to this one (optional).

If left empty no constraints will be applied. When provided,
unit upgrade requests to this release will check and enforce this
constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#upgradeable_from_releases SaasRuntimeRelease#upgradeable_from_releases}

---

### SaasRuntimeReleaseTimeouts <a name="SaasRuntimeReleaseTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get"></a>

```csharp
private SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">ApplicationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">SyncOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationTemplate`<sup>Required</sup> <a name="ApplicationTemplate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```csharp
public string ApplicationTemplate { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `SyncOperation`<sup>Required</sup> <a name="SyncOperation" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```csharp
public string SyncOperation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseApplicationTemplateComponentCompositeRef InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeReleaseApplicationTemplateComponentList <a name="SaasRuntimeReleaseApplicationTemplateComponentList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get"></a>

```csharp
private SaasRuntimeReleaseApplicationTemplateComponentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeReleaseApplicationTemplateComponentOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseApplicationTemplateComponentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef">CompositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `CompositeRef`<sup>Required</sup> <a name="CompositeRef" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```csharp
public SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList CompositeRef { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseApplicationTemplateComponent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a>

---


### SaasRuntimeReleaseBlueprintOutputReference <a name="SaasRuntimeReleaseBlueprintOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseBlueprintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage">ResetPackage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPackage` <a name="ResetPackage" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage"></a>

```csharp
private void ResetPackage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseBlueprint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---


### SaasRuntimeReleaseInputVariableDefaultsList <a name="SaasRuntimeReleaseInputVariableDefaultsList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariableDefaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get"></a>

```csharp
private SaasRuntimeReleaseInputVariableDefaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeReleaseInputVariableDefaults[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---


### SaasRuntimeReleaseInputVariableDefaultsOutputReference <a name="SaasRuntimeReleaseInputVariableDefaultsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariableDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeReleaseInputVariableDefaults InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>

---


### SaasRuntimeReleaseInputVariablesList <a name="SaasRuntimeReleaseInputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get"></a>

```csharp
private SaasRuntimeReleaseInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeReleaseInputVariablesOutputReference <a name="SaasRuntimeReleaseInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseInputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a>

---


### SaasRuntimeReleaseOutputVariablesList <a name="SaasRuntimeReleaseOutputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseOutputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get"></a>

```csharp
private SaasRuntimeReleaseOutputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeReleaseOutputVariablesOutputReference <a name="SaasRuntimeReleaseOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseOutputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseOutputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a>

---


### SaasRuntimeReleaseReleaseRequirementsOutputReference <a name="SaasRuntimeReleaseReleaseRequirementsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseReleaseRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases">ResetUpgradeableFromReleases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpgradeableFromReleases` <a name="ResetUpgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases"></a>

```csharp
private void ResetUpgradeableFromReleases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput">UpgradeableFromReleasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases">UpgradeableFromReleases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpgradeableFromReleasesInput`<sup>Optional</sup> <a name="UpgradeableFromReleasesInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput"></a>

```csharp
public string[] UpgradeableFromReleasesInput { get; }
```

- *Type:* string[]

---

##### `UpgradeableFromReleases`<sup>Required</sup> <a name="UpgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases"></a>

```csharp
public string[] UpgradeableFromReleases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeReleaseReleaseRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---


### SaasRuntimeReleaseTimeoutsOutputReference <a name="SaasRuntimeReleaseTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeReleaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeReleaseTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---



