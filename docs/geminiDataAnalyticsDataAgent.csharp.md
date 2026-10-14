# `geminiDataAnalyticsDataAgent` Submodule <a name="`geminiDataAnalyticsDataAgent` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgent <a name="GeminiDataAnalyticsDataAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgent(Construct Scope, string Id, GeminiDataAnalyticsDataAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent">PutDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent">ResetDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataAnalyticsAgent` <a name="PutDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent"></a>

```csharp
private void PutDataAnalyticsAgent(GeminiDataAnalyticsDataAgentDataAnalyticsAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiDataAnalyticsDataAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `ResetDataAnalyticsAgent` <a name="ResetDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent"></a>

```csharp
private void ResetDataAnalyticsAgent()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataAnalyticsDataAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataAnalyticsDataAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent">DataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime">PurgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput">DataAnalyticsAgentInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataAnalyticsAgent`<sup>Required</sup> <a name="DataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference DataAnalyticsAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime"></a>

```csharp
public string PurgeTime { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts"></a>

```csharp
public GeminiDataAnalyticsDataAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput"></a>

```csharp
public string DataAgentIdInput { get; }
```

- *Type:* string

---

##### `DataAnalyticsAgentInput`<sup>Optional</sup> <a name="DataAnalyticsAgentInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgent DataAnalyticsAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentConfig <a name="GeminiDataAnalyticsDataAgentConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAgentId,
    string Location,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgent DataAnalyticsAgent = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string KmsKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GeminiDataAnalyticsDataAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location">Location</a></code> | <code>string</code> | The location of the DataAgent. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent">DataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | data_analytics_agent block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the agent. Must be between 1 and 1024 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. User friendly display name. Must be between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels to help users filter related agents. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; set; }
```

- *Type:* string

Required.

The ID to use for the DataAgent, which becomes the final component
of the resource name. The ID must start with a lowercase letter and may
contain lowercase letters, digits, underscores, and hyphens, up to 63
characters in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DataAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}

---

##### `DataAnalyticsAgent`<sup>Optional</sup> <a name="DataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgent DataAnalyticsAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

data_analytics_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the agent. Must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. User friendly display name. Must be between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Optional.

Customer managed encryption key (CMEK) to use for encrypting the
DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
as the DataAgent. The expected format is
projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels to help users filter related agents.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts"></a>

```csharp
public GeminiDataAnalyticsDataAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgent <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgent {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext PublishedContext = null,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext StagingContext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext">PublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | published_context block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext">StagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | staging_context block. |

---

##### `PublishedContext`<sup>Optional</sup> <a name="PublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext PublishedContext { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

published_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}

---

##### `StagingContext`<sup>Optional</sup> <a name="StagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext StagingContext { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

staging_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext {

};
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences {

};
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq {

};
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences {

};
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences DatasourceReferences,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] ExampleQueries = null,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] GlossaryTerms = null,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions Options = null,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] SchemaRelationships = null,
    string SystemInstruction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries">ExampleQueries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms">GlossaryTerms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships">SchemaRelationships</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction">SystemInstruction</a></code> | <code>string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences DatasourceReferences { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `ExampleQueries`<sup>Optional</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] ExampleQueries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] GlossaryTerms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `SchemaRelationships`<sup>Optional</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] SchemaRelationships { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `SystemInstruction`<sup>Optional</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction"></a>

```csharp
public string SystemInstruction { get; set; }
```

- *Type:* string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq Bq
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq Bq { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq {
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] TableReferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences">TableReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | table_references block. |

---

##### `TableReferences`<sup>Optional</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] TableReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences {
    string DatasetId,
    string ProjectId,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId">DatasetId</a></code> | <code>string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId">ProjectId</a></code> | <code>string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId">TableId</a></code> | <code>string</code> | Required. The table ID. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries {
    string NaturalLanguageQuestion = null,
    string SqlQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `NaturalLanguageQuestion`<sup>Optional</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion"></a>

```csharp
public string NaturalLanguageQuestion { get; set; }
```

- *Type:* string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `SqlQuery`<sup>Optional</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; set; }
```

- *Type:* string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms {
    string Description,
    string DisplayName,
    string[] Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description">Description</a></code> | <code>string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName">DisplayName</a></code> | <code>string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels">Labels</a></code> | <code>string[]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis Analysis = null,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource Datasource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | datasource block. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis Analysis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `Datasource`<sup>Optional</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource Datasource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython Python = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | python block. |

---

##### `Python`<sup>Optional</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython Python { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource {
    double BigQueryMaxBilledBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>double</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `BigQueryMaxBilledBytes`<sup>Optional</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```csharp
public double BigQueryMaxBilledBytes { get; set; }
```

- *Type:* double

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPaths,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths RightSchemaPaths,
    double ConfidenceScore = null,
    string[] Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore">ConfidenceScore</a></code> | <code>double</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources">Sources</a></code> | <code>string[]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPaths { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths RightSchemaPaths { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `ConfidenceScore`<sup>Optional</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore"></a>

```csharp
public double ConfidenceScore { get; set; }
```

- *Type:* double

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources"></a>

```csharp
public string[] Sources { get; set; }
```

- *Type:* string[]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths {
    string[] Paths,
    string TableFqn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths">Paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```csharp
public string TableFqn { get; set; }
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths {
    string[] Paths,
    string TableFqn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths">Paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```csharp
public string TableFqn { get; set; }
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences DatasourceReferences,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] ExampleQueries = null,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] GlossaryTerms = null,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions Options = null,
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] SchemaRelationships = null,
    string SystemInstruction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries">ExampleQueries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms">GlossaryTerms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships">SchemaRelationships</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction">SystemInstruction</a></code> | <code>string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences DatasourceReferences { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `ExampleQueries`<sup>Optional</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] ExampleQueries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] GlossaryTerms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `SchemaRelationships`<sup>Optional</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] SchemaRelationships { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `SystemInstruction`<sup>Optional</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction"></a>

```csharp
public string SystemInstruction { get; set; }
```

- *Type:* string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq Bq
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq Bq { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq {
    IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] TableReferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences">TableReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | table_references block. |

---

##### `TableReferences`<sup>Optional</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] TableReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences {
    string DatasetId,
    string ProjectId,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId">DatasetId</a></code> | <code>string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId">ProjectId</a></code> | <code>string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId">TableId</a></code> | <code>string</code> | Required. The table ID. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries {
    string NaturalLanguageQuestion = null,
    string SqlQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `NaturalLanguageQuestion`<sup>Optional</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion"></a>

```csharp
public string NaturalLanguageQuestion { get; set; }
```

- *Type:* string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `SqlQuery`<sup>Optional</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; set; }
```

- *Type:* string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms {
    string Description,
    string DisplayName,
    string[] Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description">Description</a></code> | <code>string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName">DisplayName</a></code> | <code>string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels">Labels</a></code> | <code>string[]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis Analysis = null,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource Datasource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | datasource block. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis Analysis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `Datasource`<sup>Optional</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource Datasource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython Python = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | python block. |

---

##### `Python`<sup>Optional</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython Python { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource {
    double BigQueryMaxBilledBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>double</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `BigQueryMaxBilledBytes`<sup>Optional</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```csharp
public double BigQueryMaxBilledBytes { get; set; }
```

- *Type:* double

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships {
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPaths,
    GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths RightSchemaPaths,
    double ConfidenceScore = null,
    string[] Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore">ConfidenceScore</a></code> | <code>double</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources">Sources</a></code> | <code>string[]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPaths { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths RightSchemaPaths { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `ConfidenceScore`<sup>Optional</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore"></a>

```csharp
public double ConfidenceScore { get; set; }
```

- *Type:* double

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources"></a>

```csharp
public string[] Sources { get; set; }
```

- *Type:* string[]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths {
    string[] Paths,
    string TableFqn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths">Paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```csharp
public string TableFqn { get; set; }
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths {
    string[] Paths,
    string TableFqn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths">Paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```csharp
public string TableFqn { get; set; }
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentTimeouts <a name="GeminiDataAnalyticsDataAgentTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList TableReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList Bq { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList DatasourceReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a>

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction"></a>

```csharp
public string SystemInstruction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext">PutPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext">PutStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext">ResetPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext">ResetStagingContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublishedContext` <a name="PutPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext"></a>

```csharp
private void PutPublishedContext(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `PutStagingContext` <a name="PutStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext"></a>

```csharp
private void PutStagingContext(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `ResetPublishedContext` <a name="ResetPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext"></a>

```csharp
private void ResetPublishedContext()
```

##### `ResetStagingContext` <a name="ResetStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext"></a>

```csharp
private void ResetStagingContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext">LastPublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext">PublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext">StagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput">PublishedContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput">StagingContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastPublishedContext`<sup>Required</sup> <a name="LastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList LastPublishedContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a>

---

##### `PublishedContext`<sup>Required</sup> <a name="PublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference PublishedContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a>

---

##### `StagingContext`<sup>Required</sup> <a name="StagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference StagingContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a>

---

##### `PublishedContextInput`<sup>Optional</sup> <a name="PublishedContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext PublishedContextInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `StagingContextInput`<sup>Optional</sup> <a name="StagingContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext StagingContextInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences">PutTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences">ResetTableReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableReferences` <a name="PutTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```csharp
private void PutTableReferences(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---

##### `ResetTableReferences` <a name="ResetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```csharp
private void ResetTableReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">TableReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList TableReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `TableReferencesInput`<sup>Optional</sup> <a name="TableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] TableReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq">PutBq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBq` <a name="PutBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq"></a>

```csharp
private void PutBq(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput">BqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference Bq { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a>

---

##### `BqInput`<sup>Optional</sup> <a name="BqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq BqInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">ResetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery">ResetSqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNaturalLanguageQuestion` <a name="ResetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```csharp
private void ResetNaturalLanguageQuestion()
```

##### `ResetSqlQuery` <a name="ResetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery"></a>

```csharp
private void ResetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">NaturalLanguageQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NaturalLanguageQuestionInput`<sup>Optional</sup> <a name="NaturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```csharp
public string NaturalLanguageQuestionInput { get; }
```

- *Type:* string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```csharp
public string SqlQueryInput { get; }
```

- *Type:* string

---

##### `NaturalLanguageQuestion`<sup>Required</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```csharp
public string NaturalLanguageQuestion { get; }
```

- *Type:* string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython">PutPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython">ResetPython</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPython` <a name="PutPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython"></a>

```csharp
private void PutPython(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `ResetPython` <a name="ResetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython"></a>

```csharp
private void ResetPython()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput">PythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Python`<sup>Required</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference Python { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a>

---

##### `PythonInput`<sup>Optional</sup> <a name="PythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython PythonInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">ResetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBigQueryMaxBilledBytes` <a name="ResetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```csharp
private void ResetBigQueryMaxBilledBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">BigQueryMaxBilledBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="BigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```csharp
public double BigQueryMaxBilledBytesInput { get; }
```

- *Type:* double

---

##### `BigQueryMaxBilledBytes`<sup>Required</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```csharp
public double BigQueryMaxBilledBytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource">PutDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource">ResetDatasource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `PutDatasource` <a name="PutDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource"></a>

```csharp
private void PutDatasource(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetDatasource` <a name="ResetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource"></a>

```csharp
private void ResetDatasource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput">AnalysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput">DatasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a>

---

##### `Datasource`<sup>Required</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference Datasource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis AnalysisInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `DatasourceInput`<sup>Optional</sup> <a name="DatasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource DatasourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences">PutDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries">PutExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms">PutGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships">PutSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries">ResetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships">ResetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction">ResetSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasourceReferences` <a name="PutDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences"></a>

```csharp
private void PutDatasourceReferences(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `PutExampleQueries` <a name="PutExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries"></a>

```csharp
private void PutExampleQueries(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---

##### `PutGlossaryTerms` <a name="PutGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms"></a>

```csharp
private void PutGlossaryTerms(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions"></a>

```csharp
private void PutOptions(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `PutSchemaRelationships` <a name="PutSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships"></a>

```csharp
private void PutSchemaRelationships(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---

##### `ResetExampleQueries` <a name="ResetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries"></a>

```csharp
private void ResetExampleQueries()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms"></a>

```csharp
private void ResetGlossaryTerms()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSchemaRelationships` <a name="ResetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships"></a>

```csharp
private void ResetSchemaRelationships()
```

##### `ResetSystemInstruction` <a name="ResetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction"></a>

```csharp
private void ResetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries">ExampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms">GlossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships">SchemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput">DatasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput">ExampleQueriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput">SchemaRelationshipsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput">SystemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference DatasourceReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a>

---

##### `ExampleQueries`<sup>Required</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList ExampleQueries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a>

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList GlossaryTerms { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a>

---

##### `SchemaRelationships`<sup>Required</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList SchemaRelationships { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a>

---

##### `DatasourceReferencesInput`<sup>Optional</sup> <a name="DatasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences DatasourceReferencesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `ExampleQueriesInput`<sup>Optional</sup> <a name="ExampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] ExampleQueriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] GlossaryTermsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `SchemaRelationshipsInput`<sup>Optional</sup> <a name="SchemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] SchemaRelationshipsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---

##### `SystemInstructionInput`<sup>Optional</sup> <a name="SystemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput"></a>

```csharp
public string SystemInstructionInput { get; }
```

- *Type:* string

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction"></a>

```csharp
public string SystemInstruction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```csharp
public string TableFqnInput { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```csharp
public string TableFqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">PutLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths">PutRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore">ResetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftSchemaPaths` <a name="PutLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```csharp
private void PutLeftSchemaPaths(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `PutRightSchemaPaths` <a name="PutRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```csharp
private void PutRightSchemaPaths(GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `ResetConfidenceScore` <a name="ResetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```csharp
private void ResetConfidenceScore()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">ConfidenceScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">LeftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">RightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore">ConfidenceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources">Sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference LeftSchemaPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference RightSchemaPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `ConfidenceScoreInput`<sup>Optional</sup> <a name="ConfidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```csharp
public double ConfidenceScoreInput { get; }
```

- *Type:* double

---

##### `LeftSchemaPathsInput`<sup>Optional</sup> <a name="LeftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPathsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `RightSchemaPathsInput`<sup>Optional</sup> <a name="RightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths RightSchemaPathsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```csharp
public string[] SourcesInput { get; }
```

- *Type:* string[]

---

##### `ConfidenceScore`<sup>Required</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```csharp
public double ConfidenceScore { get; }
```

- *Type:* double

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources"></a>

```csharp
public string[] Sources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```csharp
public string TableFqnInput { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```csharp
public string TableFqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences">PutTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences">ResetTableReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableReferences` <a name="PutTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```csharp
private void PutTableReferences(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---

##### `ResetTableReferences` <a name="ResetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```csharp
private void ResetTableReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">TableReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList TableReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a>

---

##### `TableReferencesInput`<sup>Optional</sup> <a name="TableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] TableReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq">PutBq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBq` <a name="PutBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq"></a>

```csharp
private void PutBq(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput">BqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference Bq { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a>

---

##### `BqInput`<sup>Optional</sup> <a name="BqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq BqInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">ResetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery">ResetSqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNaturalLanguageQuestion` <a name="ResetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```csharp
private void ResetNaturalLanguageQuestion()
```

##### `ResetSqlQuery` <a name="ResetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery"></a>

```csharp
private void ResetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">NaturalLanguageQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NaturalLanguageQuestionInput`<sup>Optional</sup> <a name="NaturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```csharp
public string NaturalLanguageQuestionInput { get; }
```

- *Type:* string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```csharp
public string SqlQueryInput { get; }
```

- *Type:* string

---

##### `NaturalLanguageQuestion`<sup>Required</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```csharp
public string NaturalLanguageQuestion { get; }
```

- *Type:* string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython">PutPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython">ResetPython</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPython` <a name="PutPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython"></a>

```csharp
private void PutPython(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `ResetPython` <a name="ResetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython"></a>

```csharp
private void ResetPython()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput">PythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Python`<sup>Required</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference Python { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a>

---

##### `PythonInput`<sup>Optional</sup> <a name="PythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython PythonInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">ResetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBigQueryMaxBilledBytes` <a name="ResetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```csharp
private void ResetBigQueryMaxBilledBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">BigQueryMaxBilledBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="BigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```csharp
public double BigQueryMaxBilledBytesInput { get; }
```

- *Type:* double

---

##### `BigQueryMaxBilledBytes`<sup>Required</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```csharp
public double BigQueryMaxBilledBytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource">PutDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource">ResetDatasource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis"></a>

```csharp
private void PutAnalysis(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `PutDatasource` <a name="PutDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource"></a>

```csharp
private void PutDatasource(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetDatasource` <a name="ResetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource"></a>

```csharp
private void ResetDatasource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput">AnalysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput">DatasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a>

---

##### `Datasource`<sup>Required</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference Datasource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis AnalysisInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `DatasourceInput`<sup>Optional</sup> <a name="DatasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource DatasourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences">PutDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries">PutExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms">PutGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships">PutSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries">ResetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships">ResetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction">ResetSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasourceReferences` <a name="PutDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences"></a>

```csharp
private void PutDatasourceReferences(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `PutExampleQueries` <a name="PutExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries"></a>

```csharp
private void PutExampleQueries(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---

##### `PutGlossaryTerms` <a name="PutGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms"></a>

```csharp
private void PutGlossaryTerms(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions"></a>

```csharp
private void PutOptions(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `PutSchemaRelationships` <a name="PutSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships"></a>

```csharp
private void PutSchemaRelationships(IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---

##### `ResetExampleQueries` <a name="ResetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries"></a>

```csharp
private void ResetExampleQueries()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms"></a>

```csharp
private void ResetGlossaryTerms()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSchemaRelationships` <a name="ResetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships"></a>

```csharp
private void ResetSchemaRelationships()
```

##### `ResetSystemInstruction` <a name="ResetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction"></a>

```csharp
private void ResetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries">ExampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms">GlossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships">SchemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput">DatasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput">ExampleQueriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput">SchemaRelationshipsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput">SystemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference DatasourceReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a>

---

##### `ExampleQueries`<sup>Required</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList ExampleQueries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a>

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList GlossaryTerms { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a>

---

##### `SchemaRelationships`<sup>Required</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList SchemaRelationships { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a>

---

##### `DatasourceReferencesInput`<sup>Optional</sup> <a name="DatasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences DatasourceReferencesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `ExampleQueriesInput`<sup>Optional</sup> <a name="ExampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] ExampleQueriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] GlossaryTermsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `SchemaRelationshipsInput`<sup>Optional</sup> <a name="SchemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] SchemaRelationshipsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---

##### `SystemInstructionInput`<sup>Optional</sup> <a name="SystemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput"></a>

```csharp
public string SystemInstructionInput { get; }
```

- *Type:* string

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction"></a>

```csharp
public string SystemInstruction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```csharp
public string TableFqnInput { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```csharp
public string TableFqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get"></a>

```csharp
private GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">PutLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths">PutRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore">ResetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftSchemaPaths` <a name="PutLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```csharp
private void PutLeftSchemaPaths(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `PutRightSchemaPaths` <a name="PutRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```csharp
private void PutRightSchemaPaths(GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `ResetConfidenceScore` <a name="ResetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```csharp
private void ResetConfidenceScore()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">ConfidenceScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">LeftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">RightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore">ConfidenceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources">Sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference LeftSchemaPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference RightSchemaPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `ConfidenceScoreInput`<sup>Optional</sup> <a name="ConfidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```csharp
public double ConfidenceScoreInput { get; }
```

- *Type:* double

---

##### `LeftSchemaPathsInput`<sup>Optional</sup> <a name="LeftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths LeftSchemaPathsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `RightSchemaPathsInput`<sup>Optional</sup> <a name="RightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths RightSchemaPathsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```csharp
public string[] SourcesInput { get; }
```

- *Type:* string[]

---

##### `ConfidenceScore`<sup>Required</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```csharp
public double ConfidenceScore { get; }
```

- *Type:* double

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources"></a>

```csharp
public string[] Sources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```csharp
public string TableFqnInput { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```csharp
public string TableFqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentTimeoutsOutputReference <a name="GeminiDataAnalyticsDataAgentTimeoutsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GeminiDataAnalyticsDataAgentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---



