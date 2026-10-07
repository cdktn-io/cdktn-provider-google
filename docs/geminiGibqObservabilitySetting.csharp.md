# `geminiGibqObservabilitySetting` Submodule <a name="`geminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySetting <a name="GeminiGibqObservabilitySetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySetting(Construct Scope, string Id, GeminiGibqObservabilitySettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">PutConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">ResetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConversationalAnalyticsSetting` <a name="PutConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```csharp
private void PutConversationalAnalyticsSetting(GeminiGibqObservabilitySettingConversationalAnalyticsSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiGibqObservabilitySettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `ResetConversationalAnalyticsSetting` <a name="ResetConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```csharp
private void ResetConversationalAnalyticsSetting()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiGibqObservabilitySetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGibqObservabilitySetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">ConversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">GibqObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConversationalAnalyticsSetting`<sup>Required</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```csharp
public GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference ConversationalAnalyticsSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts"></a>

```csharp
public GeminiGibqObservabilitySettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ConversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="ConversationalAnalyticsSettingInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```csharp
public GeminiGibqObservabilitySettingConversationalAnalyticsSetting ConversationalAnalyticsSettingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="GibqObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```csharp
public string GibqObservabilitySettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```csharp
public IResolvable|GeminiGibqObservabilitySettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```csharp
public string GibqObservabilitySettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingConfig <a name="GeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GibqObservabilitySettingId,
    GeminiGibqObservabilitySettingConversationalAnalyticsSetting ConversationalAnalyticsSetting = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GeminiGibqObservabilitySettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>string</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```csharp
public string GibqObservabilitySettingId { get; set; }
```

- *Type:* string

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#gibq_observability_setting_id GeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `ConversationalAnalyticsSetting`<sup>Optional</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```csharp
public GeminiGibqObservabilitySettingConversationalAnalyticsSetting ConversationalAnalyticsSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#conversational_analytics_setting GeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#deletion_policy GeminiGibqObservabilitySetting#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#labels GeminiGibqObservabilitySetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#location GeminiGibqObservabilitySetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```csharp
public GeminiGibqObservabilitySettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#timeouts GeminiGibqObservabilitySetting#timeouts}

---

### GeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingConversationalAnalyticsSetting {
    bool|IResolvable FeedbackEnabled = null,
    bool|IResolvable LoggingEnabled = null,
    bool|IResolvable MetricsEnabled = null,
    bool|IResolvable TracesEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">LoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">TracesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `FeedbackEnabled`<sup>Optional</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```csharp
public bool|IResolvable FeedbackEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#feedback_enabled GeminiGibqObservabilitySetting#feedback_enabled}

---

##### `LoggingEnabled`<sup>Optional</sup> <a name="LoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```csharp
public bool|IResolvable LoggingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#logging_enabled GeminiGibqObservabilitySetting#logging_enabled}

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#metrics_enabled GeminiGibqObservabilitySetting#metrics_enabled}

---

##### `TracesEnabled`<sup>Optional</sup> <a name="TracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```csharp
public bool|IResolvable TracesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#traces_enabled GeminiGibqObservabilitySetting#traces_enabled}

---

### GeminiGibqObservabilitySettingTimeouts <a name="GeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">ResetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">ResetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">ResetTracesEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeedbackEnabled` <a name="ResetFeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```csharp
private void ResetFeedbackEnabled()
```

##### `ResetLoggingEnabled` <a name="ResetLoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```csharp
private void ResetLoggingEnabled()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```csharp
private void ResetMetricsEnabled()
```

##### `ResetTracesEnabled` <a name="ResetTracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```csharp
private void ResetTracesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">FeedbackEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">LoggingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">TracesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">LoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">TracesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeedbackEnabledInput`<sup>Optional</sup> <a name="FeedbackEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```csharp
public bool|IResolvable FeedbackEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoggingEnabledInput`<sup>Optional</sup> <a name="LoggingEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```csharp
public bool|IResolvable LoggingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```csharp
public bool|IResolvable MetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TracesEnabledInput`<sup>Optional</sup> <a name="TracesEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```csharp
public bool|IResolvable TracesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FeedbackEnabled`<sup>Required</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```csharp
public bool|IResolvable FeedbackEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoggingEnabled`<sup>Required</sup> <a name="LoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```csharp
public bool|IResolvable LoggingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TracesEnabled`<sup>Required</sup> <a name="TracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```csharp
public bool|IResolvable TracesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```csharp
public GeminiGibqObservabilitySettingConversationalAnalyticsSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiGibqObservabilitySettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiGibqObservabilitySettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---



