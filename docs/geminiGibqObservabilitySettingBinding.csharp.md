# `geminiGibqObservabilitySettingBinding` Submodule <a name="`geminiGibqObservabilitySettingBinding` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySettingBinding <a name="GeminiGibqObservabilitySettingBinding" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding google_gemini_gibq_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingBinding(Construct Scope, string Id, GeminiGibqObservabilitySettingBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig">GeminiGibqObservabilitySettingBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig">GeminiGibqObservabilitySettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiGibqObservabilitySettingBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySettingBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySettingBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySettingBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySettingBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGibqObservabilitySettingBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGibqObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput">GibqObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeouts"></a>

```csharp
public GeminiGibqObservabilitySettingBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="GibqObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput"></a>

```csharp
public string GibqObservabilitySettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingIdInput"></a>

```csharp
public string SettingBindingIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|GeminiGibqObservabilitySettingBindingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId"></a>

```csharp
public string GibqObservabilitySettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingBindingConfig <a name="GeminiGibqObservabilitySettingBindingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GibqObservabilitySettingId,
    string SettingBindingId,
    string Target,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Product = null,
    string Project = null,
    GeminiGibqObservabilitySettingBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.target">Target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#id GeminiGibqObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.product">Product</a></code> | <code>string</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#project GeminiGibqObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId"></a>

```csharp
public string GibqObservabilitySettingId { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#gibq_observability_setting_id GeminiGibqObservabilitySettingBinding#gibq_observability_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; set; }
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#setting_binding_id GeminiGibqObservabilitySettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#target GeminiGibqObservabilitySettingBinding#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#deletion_policy GeminiGibqObservabilitySettingBinding#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#id GeminiGibqObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#labels GeminiGibqObservabilitySettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#location GeminiGibqObservabilitySettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#product GeminiGibqObservabilitySettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#project GeminiGibqObservabilitySettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.timeouts"></a>

```csharp
public GeminiGibqObservabilitySettingBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#timeouts GeminiGibqObservabilitySettingBinding#timeouts}

---

### GeminiGibqObservabilitySettingBindingTimeouts <a name="GeminiGibqObservabilitySettingBindingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#create GeminiGibqObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#delete GeminiGibqObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#update GeminiGibqObservabilitySettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#create GeminiGibqObservabilitySettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#delete GeminiGibqObservabilitySettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#update GeminiGibqObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingBindingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiGibqObservabilitySettingBindingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---



