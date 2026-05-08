# `geminiDataSharingWithGoogleSetting` Submodule <a name="`geminiDataSharingWithGoogleSetting` Submodule" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSetting <a name="GeminiDataSharingWithGoogleSetting" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataSharingWithGoogleSetting(Construct Scope, string Id, GeminiDataSharingWithGoogleSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnableDataSharing">ResetEnableDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">ResetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiDataSharingWithGoogleSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `ResetEnableDataSharing` <a name="ResetEnableDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnableDataSharing"></a>

```csharp
private void ResetEnableDataSharing()
```

##### `ResetEnablePreviewDataSharing` <a name="ResetEnablePreviewDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```csharp
private void ResetEnablePreviewDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataSharingWithGoogleSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataSharingWithGoogleSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataSharingWithGoogleSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataSharingWithGoogleSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataSharingWithGoogleSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">DataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharingInput">EnableDataSharingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">EnablePreviewDataSharingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharing">EnableDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```csharp
public GeminiDataSharingWithGoogleSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="DataSharingWithGoogleSettingIdInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```csharp
public string DataSharingWithGoogleSettingIdInput { get; }
```

- *Type:* string

---

##### `EnableDataSharingInput`<sup>Optional</sup> <a name="EnableDataSharingInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharingInput"></a>

```csharp
public bool|IResolvable EnableDataSharingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreviewDataSharingInput`<sup>Optional</sup> <a name="EnablePreviewDataSharingInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```csharp
public IResolvable|GeminiDataSharingWithGoogleSettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; }
```

- *Type:* string

---

##### `EnableDataSharing`<sup>Required</sup> <a name="EnableDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharing"></a>

```csharp
public bool|IResolvable EnableDataSharing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreviewDataSharing`<sup>Required</sup> <a name="EnablePreviewDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingConfig <a name="GeminiDataSharingWithGoogleSettingConfig" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataSharingWithGoogleSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataSharingWithGoogleSettingId,
    bool|IResolvable EnableDataSharing = null,
    bool|IResolvable EnablePreviewDataSharing = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GeminiDataSharingWithGoogleSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing">EnableDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether data sharing should be enabled in GA products. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether data sharing should be enabled in Preview products. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; set; }
```

- *Type:* string

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `EnableDataSharing`<sup>Optional</sup> <a name="EnableDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing"></a>

```csharp
public bool|IResolvable EnableDataSharing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether data sharing should be enabled in GA products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#enable_data_sharing GeminiDataSharingWithGoogleSetting#enable_data_sharing}

---

##### `EnablePreviewDataSharing`<sup>Optional</sup> <a name="EnablePreviewDataSharing" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether data sharing should be enabled in Preview products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```csharp
public GeminiDataSharingWithGoogleSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}

---

### GeminiDataSharingWithGoogleSettingTimeouts <a name="GeminiDataSharingWithGoogleSettingTimeouts" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataSharingWithGoogleSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataSharingWithGoogleSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataSharingWithGoogleSettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---



