# `chronicleFindingsRefinementDeployment` Submodule <a name="`chronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinementDeployment <a name="ChronicleFindingsRefinementDeployment" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeployment(Construct Scope, string Id, ChronicleFindingsRefinementDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig">ChronicleFindingsRefinementDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig">ChronicleFindingsRefinementDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">PutDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">ResetDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetectionExclusionApplication` <a name="PutDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```csharp
private void PutDetectionExclusionApplication(ChronicleFindingsRefinementDeploymentDetectionExclusionApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleFindingsRefinementDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `ResetArchived` <a name="ResetArchived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetDetectionExclusionApplication` <a name="ResetDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```csharp
private void ResetDetectionExclusionApplication()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleFindingsRefinementDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleFindingsRefinementDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleFindingsRefinementDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleFindingsRefinementDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleFindingsRefinementDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">DetectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput">ArchivedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">DetectionExclusionApplicationInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput">FindingsRefinementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived">Archived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement">FindingsRefinement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DetectionExclusionApplication`<sup>Required</sup> <a name="DetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```csharp
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference DetectionExclusionApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts"></a>

```csharp
public ChronicleFindingsRefinementDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```csharp
public bool|IResolvable ArchivedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DetectionExclusionApplicationInput`<sup>Optional</sup> <a name="DetectionExclusionApplicationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```csharp
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication DetectionExclusionApplicationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FindingsRefinementInput`<sup>Optional</sup> <a name="FindingsRefinementInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```csharp
public string FindingsRefinementInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleFindingsRefinementDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived"></a>

```csharp
public bool|IResolvable Archived { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FindingsRefinement`<sup>Required</sup> <a name="FindingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```csharp
public string FindingsRefinement { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementDeploymentConfig <a name="ChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FindingsRefinement,
    string Instance,
    string Location,
    bool|IResolvable Archived = null,
    ChronicleFindingsRefinementDeploymentDetectionExclusionApplication DetectionExclusionApplication = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string Project = null,
    ChronicleFindingsRefinementDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">FindingsRefinement</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived">Archived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">DetectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FindingsRefinement`<sup>Required</sup> <a name="FindingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```csharp
public string FindingsRefinement { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```csharp
public bool|IResolvable Archived { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `DetectionExclusionApplication`<sup>Optional</sup> <a name="DetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```csharp
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication DetectionExclusionApplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```csharp
public ChronicleFindingsRefinementDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeploymentDetectionExclusionApplication {
    string[] CuratedRules = null,
    string[] CuratedRuleSets = null,
    string[] Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">CuratedRules</a></code> | <code>string[]</code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">CuratedRuleSets</a></code> | <code>string[]</code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">Rules</a></code> | <code>string[]</code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `CuratedRules`<sup>Optional</sup> <a name="CuratedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```csharp
public string[] CuratedRules { get; set; }
```

- *Type:* string[]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}

---

##### `CuratedRuleSets`<sup>Optional</sup> <a name="CuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```csharp
public string[] CuratedRuleSets { get; set; }
```

- *Type:* string[]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```csharp
public string[] Rules { get; set; }
```

- *Type:* string[]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}

---

### ChronicleFindingsRefinementDeploymentTimeouts <a name="ChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">ResetCuratedRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">ResetCuratedRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCuratedRules` <a name="ResetCuratedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```csharp
private void ResetCuratedRules()
```

##### `ResetCuratedRuleSets` <a name="ResetCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```csharp
private void ResetCuratedRuleSets()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">DeletedCuratedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">CuratedRuleSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">CuratedRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">RulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">CuratedRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">CuratedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">Rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeletedCuratedRuleSets`<sup>Required</sup> <a name="DeletedCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```csharp
public string[] DeletedCuratedRuleSets { get; }
```

- *Type:* string[]

---

##### `CuratedRuleSetsInput`<sup>Optional</sup> <a name="CuratedRuleSetsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```csharp
public string[] CuratedRuleSetsInput { get; }
```

- *Type:* string[]

---

##### `CuratedRulesInput`<sup>Optional</sup> <a name="CuratedRulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```csharp
public string[] CuratedRulesInput { get; }
```

- *Type:* string[]

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```csharp
public string[] RulesInput { get; }
```

- *Type:* string[]

---

##### `CuratedRules`<sup>Required</sup> <a name="CuratedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```csharp
public string[] CuratedRules { get; }
```

- *Type:* string[]

---

##### `CuratedRuleSets`<sup>Required</sup> <a name="CuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```csharp
public string[] CuratedRuleSets { get; }
```

- *Type:* string[]

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```csharp
public string[] Rules { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```csharp
public ChronicleFindingsRefinementDeploymentDetectionExclusionApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### ChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="ChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleFindingsRefinementDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleFindingsRefinementDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---



