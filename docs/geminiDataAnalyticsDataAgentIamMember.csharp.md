# `geminiDataAnalyticsDataAgentIamMember` Submodule <a name="`geminiDataAnalyticsDataAgentIamMember` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgentIamMember <a name="GeminiDataAnalyticsDataAgentIamMember" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member google_gemini_data_analytics_data_agent_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentIamMember(Construct Scope, string Id, GeminiDataAnalyticsDataAgentIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig">GeminiDataAnalyticsDataAgentIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig">GeminiDataAnalyticsDataAgentIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.putCondition"></a>

```csharp
private void PutCondition(GeminiDataAnalyticsDataAgentIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgentIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgentIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgentIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GeminiDataAnalyticsDataAgentIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataAnalyticsDataAgentIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataAnalyticsDataAgentIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgentIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference">GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.condition"></a>

```csharp
public GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference">GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.conditionInput"></a>

```csharp
public GeminiDataAnalyticsDataAgentIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a>

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dataAgentIdInput"></a>

```csharp
public string DataAgentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentIamMemberCondition <a name="GeminiDataAnalyticsDataAgentIamMemberCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#expression GeminiDataAnalyticsDataAgentIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#title GeminiDataAnalyticsDataAgentIamMember#title}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#description GeminiDataAnalyticsDataAgentIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#expression GeminiDataAnalyticsDataAgentIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#title GeminiDataAnalyticsDataAgentIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#description GeminiDataAnalyticsDataAgentIamMember#description}.

---

### GeminiDataAnalyticsDataAgentIamMemberConfig <a name="GeminiDataAnalyticsDataAgentIamMemberConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAgentId,
    string Member,
    string Role,
    GeminiDataAnalyticsDataAgentIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#data_agent_id GeminiDataAnalyticsDataAgentIamMember#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#member GeminiDataAnalyticsDataAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#role GeminiDataAnalyticsDataAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#id GeminiDataAnalyticsDataAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#location GeminiDataAnalyticsDataAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#project GeminiDataAnalyticsDataAgentIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#data_agent_id GeminiDataAnalyticsDataAgentIamMember#data_agent_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#member GeminiDataAnalyticsDataAgentIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#role GeminiDataAnalyticsDataAgentIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.condition"></a>

```csharp
public GeminiDataAnalyticsDataAgentIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#condition GeminiDataAnalyticsDataAgentIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#id GeminiDataAnalyticsDataAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#location GeminiDataAnalyticsDataAgentIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent_iam_member#project GeminiDataAnalyticsDataAgentIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference <a name="GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GeminiDataAnalyticsDataAgentIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamMember.GeminiDataAnalyticsDataAgentIamMemberCondition">GeminiDataAnalyticsDataAgentIamMemberCondition</a>

---



