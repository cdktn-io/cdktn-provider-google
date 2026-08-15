# `cesGuardrail` Submodule <a name="`cesGuardrail` Submodule" id="@cdktn/provider-google.cesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesGuardrail <a name="CesGuardrail" id="@cdktn/provider-google.cesGuardrail.CesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrail(Construct Scope, string Id, CesGuardrailConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig">CesGuardrailConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig">CesGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback">PutCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter">PutContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy">PutLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity">PutLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety">PutModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback">ResetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter">ResetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy">ResetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity">ResetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety">ResetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction"></a>

```csharp
private void PutAction(CesGuardrailAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `PutCodeCallback` <a name="PutCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback"></a>

```csharp
private void PutCodeCallback(CesGuardrailCodeCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `PutContentFilter` <a name="PutContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter"></a>

```csharp
private void PutContentFilter(CesGuardrailContentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `PutLlmPolicy` <a name="PutLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy"></a>

```csharp
private void PutLlmPolicy(CesGuardrailLlmPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `PutLlmPromptSecurity` <a name="PutLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity"></a>

```csharp
private void PutLlmPromptSecurity(CesGuardrailLlmPromptSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `PutModelSafety` <a name="PutModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety"></a>

```csharp
private void PutModelSafety(CesGuardrailModelSafety Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts"></a>

```csharp
private void PutTimeouts(CesGuardrailTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCodeCallback` <a name="ResetCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback"></a>

```csharp
private void ResetCodeCallback()
```

##### `ResetContentFilter` <a name="ResetContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter"></a>

```csharp
private void ResetContentFilter()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLlmPolicy` <a name="ResetLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy"></a>

```csharp
private void ResetLlmPolicy()
```

##### `ResetLlmPromptSecurity` <a name="ResetLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity"></a>

```csharp
private void ResetLlmPromptSecurity()
```

##### `ResetModelSafety` <a name="ResetModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety"></a>

```csharp
private void ResetModelSafety()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesGuardrail.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesGuardrail.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesGuardrail.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesGuardrail.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesGuardrail to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput">CodeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput">ContentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput">GuardrailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput">LlmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput">LlmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput">ModelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId">GuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action"></a>

```csharp
public CesGuardrailActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a>

---

##### `CodeCallback`<sup>Required</sup> <a name="CodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback"></a>

```csharp
public CesGuardrailCodeCallbackOutputReference CodeCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a>

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter"></a>

```csharp
public CesGuardrailContentFilterOutputReference ContentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `LlmPolicy`<sup>Required</sup> <a name="LlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy"></a>

```csharp
public CesGuardrailLlmPolicyOutputReference LlmPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a>

---

##### `LlmPromptSecurity`<sup>Required</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity"></a>

```csharp
public CesGuardrailLlmPromptSecurityOutputReference LlmPromptSecurity { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `ModelSafety`<sup>Required</sup> <a name="ModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety"></a>

```csharp
public CesGuardrailModelSafetyOutputReference ModelSafety { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts"></a>

```csharp
public CesGuardrailTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput"></a>

```csharp
public CesGuardrailAction ActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `CodeCallbackInput`<sup>Optional</sup> <a name="CodeCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput"></a>

```csharp
public CesGuardrailCodeCallback CodeCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `ContentFilterInput`<sup>Optional</sup> <a name="ContentFilterInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput"></a>

```csharp
public CesGuardrailContentFilter ContentFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GuardrailIdInput`<sup>Optional</sup> <a name="GuardrailIdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput"></a>

```csharp
public string GuardrailIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LlmPolicyInput`<sup>Optional</sup> <a name="LlmPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput"></a>

```csharp
public CesGuardrailLlmPolicy LlmPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `LlmPromptSecurityInput`<sup>Optional</sup> <a name="LlmPromptSecurityInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput"></a>

```csharp
public CesGuardrailLlmPromptSecurity LlmPromptSecurityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ModelSafetyInput`<sup>Optional</sup> <a name="ModelSafetyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput"></a>

```csharp
public CesGuardrailModelSafety ModelSafetyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput"></a>

```csharp
public IResolvable|CesGuardrailTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId"></a>

```csharp
public string GuardrailId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesGuardrailAction <a name="CesGuardrailAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailAction {
    CesGuardrailActionGenerativeAnswer GenerativeAnswer = null,
    CesGuardrailActionRespondImmediately RespondImmediately = null,
    CesGuardrailActionTransferAgent TransferAgent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `GenerativeAnswer`<sup>Optional</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer"></a>

```csharp
public CesGuardrailActionGenerativeAnswer GenerativeAnswer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}

---

##### `RespondImmediately`<sup>Optional</sup> <a name="RespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately"></a>

```csharp
public CesGuardrailActionRespondImmediately RespondImmediately { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}

---

##### `TransferAgent`<sup>Optional</sup> <a name="TransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent"></a>

```csharp
public CesGuardrailActionTransferAgent TransferAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}

---

### CesGuardrailActionGenerativeAnswer <a name="CesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionGenerativeAnswer {
    string Prompt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt">Prompt</a></code> | <code>string</code> | The prompt to use for the generative answer. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

### CesGuardrailActionRespondImmediately <a name="CesGuardrailActionRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionRespondImmediately {
    IResolvable|CesGuardrailActionRespondImmediatelyResponses[] Responses
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses">Responses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]</code> | responses block. |

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses"></a>

```csharp
public IResolvable|CesGuardrailActionRespondImmediatelyResponses[] Responses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#responses CesGuardrail#responses}

---

### CesGuardrailActionRespondImmediatelyResponses <a name="CesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionRespondImmediatelyResponses {
    string Text,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text">Text</a></code> | <code>string</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#text CesGuardrail#text}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailActionTransferAgent <a name="CesGuardrailActionTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionTransferAgent {
    string Agent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent">Agent</a></code> | <code>string</code> | The name of the agent to transfer the conversation to. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#agent CesGuardrail#agent}

---

### CesGuardrailCodeCallback <a name="CesGuardrailCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallback {
    CesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallback = null,
    CesGuardrailCodeCallbackAfterModelCallback AfterModelCallback = null,
    CesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallback = null,
    CesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `AfterAgentCallback`<sup>Optional</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback"></a>

```csharp
public CesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}

---

##### `AfterModelCallback`<sup>Optional</sup> <a name="AfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback"></a>

```csharp
public CesGuardrailCodeCallbackAfterModelCallback AfterModelCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}

---

##### `BeforeAgentCallback`<sup>Optional</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```csharp
public CesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}

---

##### `BeforeModelCallback`<sup>Optional</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback"></a>

```csharp
public CesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}

---

### CesGuardrailCodeCallbackAfterAgentCallback <a name="CesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackAfterAgentCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackAfterModelCallback <a name="CesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackAfterModelCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeAgentCallback <a name="CesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackBeforeAgentCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeModelCallback <a name="CesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackBeforeModelCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailConfig <a name="CesGuardrailConfig" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string DisplayName,
    string GuardrailId,
    string Location,
    CesGuardrailAction Action = null,
    CesGuardrailCodeCallback CodeCallback = null,
    CesGuardrailContentFilter ContentFilter = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    CesGuardrailLlmPolicy LlmPolicy = null,
    CesGuardrailLlmPromptSecurity LlmPromptSecurity = null,
    CesGuardrailModelSafety ModelSafety = null,
    string Project = null,
    CesGuardrailTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId">GuardrailId</a></code> | <code>string</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description">Description</a></code> | <code>string</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId"></a>

```csharp
public string GuardrailId { get; set; }
```

- *Type:* string

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action"></a>

```csharp
public CesGuardrailAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `CodeCallback`<sup>Optional</sup> <a name="CodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback"></a>

```csharp
public CesGuardrailCodeCallback CodeCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `ContentFilter`<sup>Optional</sup> <a name="ContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter"></a>

```csharp
public CesGuardrailContentFilter ContentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LlmPolicy`<sup>Optional</sup> <a name="LlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy"></a>

```csharp
public CesGuardrailLlmPolicy LlmPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `LlmPromptSecurity`<sup>Optional</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity"></a>

```csharp
public CesGuardrailLlmPromptSecurity LlmPromptSecurity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `ModelSafety`<sup>Optional</sup> <a name="ModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety"></a>

```csharp
public CesGuardrailModelSafety ModelSafety { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts"></a>

```csharp
public CesGuardrailTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

### CesGuardrailContentFilter <a name="CesGuardrailContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailContentFilter {
    string MatchType,
    string[] BannedContents = null,
    string[] BannedContentsInAgentResponse = null,
    string[] BannedContentsInUserInput = null,
    bool|IResolvable DisregardDiacritics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType">MatchType</a></code> | <code>string</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents">BannedContents</a></code> | <code>string[]</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>string[]</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>string[]</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}

---

##### `BannedContents`<sup>Optional</sup> <a name="BannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents"></a>

```csharp
public string[] BannedContents { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}

---

##### `BannedContentsInAgentResponse`<sup>Optional</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```csharp
public string[] BannedContentsInAgentResponse { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}

---

##### `BannedContentsInUserInput`<sup>Optional</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```csharp
public string[] BannedContentsInUserInput { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}

---

##### `DisregardDiacritics`<sup>Optional</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics"></a>

```csharp
public bool|IResolvable DisregardDiacritics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}

---

### CesGuardrailLlmPolicy <a name="CesGuardrailLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPolicy {
    string PolicyScope,
    string Prompt,
    bool|IResolvable AllowShortUtterance = null,
    bool|IResolvable FailOpen = null,
    double MaxConversationMessages = null,
    CesGuardrailLlmPolicyModelSettings ModelSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope">PolicyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt">Prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope"></a>

```csharp
public string PolicyScope { get; set; }
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; set; }
```

- *Type:* double

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings"></a>

```csharp
public CesGuardrailLlmPolicyModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPolicyModelSettings <a name="CesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPolicyModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurity <a name="CesGuardrailLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurity {
    CesGuardrailLlmPromptSecurityCustomPolicy CustomPolicy = null,
    CesGuardrailLlmPromptSecurityDefaultSettings DefaultSettings = null,
    bool|IResolvable FailOpen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicy CustomPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}

---

##### `DefaultSettings`<sup>Optional</sup> <a name="DefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```csharp
public CesGuardrailLlmPromptSecurityDefaultSettings DefaultSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

### CesGuardrailLlmPromptSecurityCustomPolicy <a name="CesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityCustomPolicy {
    string PolicyScope,
    string Prompt,
    bool|IResolvable AllowShortUtterance = null,
    bool|IResolvable FailOpen = null,
    double MaxConversationMessages = null,
    CesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">PolicyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">Prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```csharp
public string PolicyScope { get; set; }
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; set; }
```

- *Type:* double

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurityDefaultSettings <a name="CesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityDefaultSettings {

};
```


### CesGuardrailModelSafety <a name="CesGuardrailModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailModelSafety {
    IResolvable|CesGuardrailModelSafetySafetySettings[] SafetySettings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings">SafetySettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]</code> | safety_settings block. |

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings"></a>

```csharp
public IResolvable|CesGuardrailModelSafetySafetySettings[] SafetySettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}

---

### CesGuardrailModelSafetySafetySettings <a name="CesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailModelSafetySafetySettings {
    string Category,
    string Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category">Category</a></code> | <code>string</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold">Threshold</a></code> | <code>string</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#category CesGuardrail#category}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#threshold CesGuardrail#threshold}

---

### CesGuardrailTimeouts <a name="CesGuardrailTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#create CesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#update CesGuardrail#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#create CesGuardrail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/ces_guardrail#update CesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesGuardrailActionGenerativeAnswerOutputReference <a name="CesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionGenerativeAnswerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailActionGenerativeAnswer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---


### CesGuardrailActionOutputReference <a name="CesGuardrailActionOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer">PutGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately">PutRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent">PutTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer">ResetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately">ResetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent">ResetTransferAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenerativeAnswer` <a name="PutGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```csharp
private void PutGenerativeAnswer(CesGuardrailActionGenerativeAnswer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `PutRespondImmediately` <a name="PutRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately"></a>

```csharp
private void PutRespondImmediately(CesGuardrailActionRespondImmediately Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `PutTransferAgent` <a name="PutTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent"></a>

```csharp
private void PutTransferAgent(CesGuardrailActionTransferAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `ResetGenerativeAnswer` <a name="ResetGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```csharp
private void ResetGenerativeAnswer()
```

##### `ResetRespondImmediately` <a name="ResetRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately"></a>

```csharp
private void ResetRespondImmediately()
```

##### `ResetTransferAgent` <a name="ResetTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent"></a>

```csharp
private void ResetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput">GenerativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput">RespondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput">TransferAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GenerativeAnswer`<sup>Required</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer"></a>

```csharp
public CesGuardrailActionGenerativeAnswerOutputReference GenerativeAnswer { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `RespondImmediately`<sup>Required</sup> <a name="RespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately"></a>

```csharp
public CesGuardrailActionRespondImmediatelyOutputReference RespondImmediately { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `TransferAgent`<sup>Required</sup> <a name="TransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent"></a>

```csharp
public CesGuardrailActionTransferAgentOutputReference TransferAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a>

---

##### `GenerativeAnswerInput`<sup>Optional</sup> <a name="GenerativeAnswerInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```csharp
public CesGuardrailActionGenerativeAnswer GenerativeAnswerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `RespondImmediatelyInput`<sup>Optional</sup> <a name="RespondImmediatelyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```csharp
public CesGuardrailActionRespondImmediately RespondImmediatelyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `TransferAgentInput`<sup>Optional</sup> <a name="TransferAgentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput"></a>

```csharp
public CesGuardrailActionTransferAgent TransferAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---


### CesGuardrailActionRespondImmediatelyOutputReference <a name="CesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionRespondImmediatelyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses">PutResponses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponses` <a name="PutResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```csharp
private void PutResponses(IResolvable|CesGuardrailActionRespondImmediatelyResponses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses">Responses</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">ResponsesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```csharp
public CesGuardrailActionRespondImmediatelyResponsesList Responses { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `ResponsesInput`<sup>Optional</sup> <a name="ResponsesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```csharp
public IResolvable|CesGuardrailActionRespondImmediatelyResponses[] ResponsesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailActionRespondImmediately InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---


### CesGuardrailActionRespondImmediatelyResponsesList <a name="CesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionRespondImmediatelyResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```csharp
private CesGuardrailActionRespondImmediatelyResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```csharp
public IResolvable|CesGuardrailActionRespondImmediatelyResponses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>[]

---


### CesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="CesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionRespondImmediatelyResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesGuardrailActionRespondImmediatelyResponses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>

---


### CesGuardrailActionTransferAgentOutputReference <a name="CesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailActionTransferAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailActionTransferAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---


### CesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackAfterAgentCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailCodeCallbackAfterAgentCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---


### CesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackAfterModelCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailCodeCallbackAfterModelCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---


### CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailCodeCallbackBeforeAgentCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### CesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackBeforeModelCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailCodeCallbackBeforeModelCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---


### CesGuardrailCodeCallbackOutputReference <a name="CesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailCodeCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">PutAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback">PutAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">PutBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">PutBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">ResetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">ResetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">ResetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">ResetBeforeModelCallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAfterAgentCallback` <a name="PutAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```csharp
private void PutAfterAgentCallback(CesGuardrailCodeCallbackAfterAgentCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `PutAfterModelCallback` <a name="PutAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```csharp
private void PutAfterModelCallback(CesGuardrailCodeCallbackAfterModelCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `PutBeforeAgentCallback` <a name="PutBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```csharp
private void PutBeforeAgentCallback(CesGuardrailCodeCallbackBeforeAgentCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `PutBeforeModelCallback` <a name="PutBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```csharp
private void PutBeforeModelCallback(CesGuardrailCodeCallbackBeforeModelCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `ResetAfterAgentCallback` <a name="ResetAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```csharp
private void ResetAfterAgentCallback()
```

##### `ResetAfterModelCallback` <a name="ResetAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```csharp
private void ResetAfterModelCallback()
```

##### `ResetBeforeAgentCallback` <a name="ResetBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```csharp
private void ResetBeforeAgentCallback()
```

##### `ResetBeforeModelCallback` <a name="ResetBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```csharp
private void ResetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">AfterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">AfterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">BeforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">BeforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterAgentCallback`<sup>Required</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```csharp
public CesGuardrailCodeCallbackAfterAgentCallbackOutputReference AfterAgentCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `AfterModelCallback`<sup>Required</sup> <a name="AfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```csharp
public CesGuardrailCodeCallbackAfterModelCallbackOutputReference AfterModelCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `BeforeAgentCallback`<sup>Required</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```csharp
public CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference BeforeAgentCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `BeforeModelCallback`<sup>Required</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```csharp
public CesGuardrailCodeCallbackBeforeModelCallbackOutputReference BeforeModelCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `AfterAgentCallbackInput`<sup>Optional</sup> <a name="AfterAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```csharp
public CesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `AfterModelCallbackInput`<sup>Optional</sup> <a name="AfterModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```csharp
public CesGuardrailCodeCallbackAfterModelCallback AfterModelCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `BeforeAgentCallbackInput`<sup>Optional</sup> <a name="BeforeAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```csharp
public CesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `BeforeModelCallbackInput`<sup>Optional</sup> <a name="BeforeModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```csharp
public CesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailCodeCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---


### CesGuardrailContentFilterOutputReference <a name="CesGuardrailContentFilterOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailContentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents">ResetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">ResetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">ResetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics">ResetDisregardDiacritics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannedContents` <a name="ResetBannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```csharp
private void ResetBannedContents()
```

##### `ResetBannedContentsInAgentResponse` <a name="ResetBannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```csharp
private void ResetBannedContentsInAgentResponse()
```

##### `ResetBannedContentsInUserInput` <a name="ResetBannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```csharp
private void ResetBannedContentsInUserInput()
```

##### `ResetDisregardDiacritics` <a name="ResetDisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```csharp
private void ResetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">BannedContentsInAgentResponseInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput">BannedContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">BannedContentsInUserInputInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">DisregardDiacriticsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents">BannedContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="BannedContentsInAgentResponseInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```csharp
public string[] BannedContentsInAgentResponseInput { get; }
```

- *Type:* string[]

---

##### `BannedContentsInput`<sup>Optional</sup> <a name="BannedContentsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```csharp
public string[] BannedContentsInput { get; }
```

- *Type:* string[]

---

##### `BannedContentsInUserInputInput`<sup>Optional</sup> <a name="BannedContentsInUserInputInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```csharp
public string[] BannedContentsInUserInputInput { get; }
```

- *Type:* string[]

---

##### `DisregardDiacriticsInput`<sup>Optional</sup> <a name="DisregardDiacriticsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```csharp
public bool|IResolvable DisregardDiacriticsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `BannedContents`<sup>Required</sup> <a name="BannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```csharp
public string[] BannedContents { get; }
```

- *Type:* string[]

---

##### `BannedContentsInAgentResponse`<sup>Required</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```csharp
public string[] BannedContentsInAgentResponse { get; }
```

- *Type:* string[]

---

##### `BannedContentsInUserInput`<sup>Required</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```csharp
public string[] BannedContentsInUserInput { get; }
```

- *Type:* string[]

---

##### `DisregardDiacritics`<sup>Required</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```csharp
public bool|IResolvable DisregardDiacritics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailContentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---


### CesGuardrailLlmPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPolicyModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPolicyModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---


### CesGuardrailLlmPolicyOutputReference <a name="CesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(CesGuardrailLlmPolicyModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```csharp
private void ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```csharp
private void ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```csharp
public CesGuardrailLlmPolicyModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```csharp
public bool|IResolvable AllowShortUtteranceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```csharp
public double MaxConversationMessagesInput { get; }
```

- *Type:* double

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```csharp
public CesGuardrailLlmPolicyModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```csharp
public string PolicyScopeInput { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; }
```

- *Type:* double

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```csharp
public string PolicyScope { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityCustomPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(CesGuardrailLlmPromptSecurityCustomPolicyModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```csharp
private void ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```csharp
private void ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```csharp
public bool|IResolvable AllowShortUtteranceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```csharp
public double MaxConversationMessagesInput { get; }
```

- *Type:* double

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```csharp
public string PolicyScopeInput { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; }
```

- *Type:* double

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```csharp
public string PolicyScope { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">DefaultPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPromptTemplate`<sup>Required</sup> <a name="DefaultPromptTemplate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```csharp
public string DefaultPromptTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPromptSecurityDefaultSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### CesGuardrailLlmPromptSecurityOutputReference <a name="CesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailLlmPromptSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">PutDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">ResetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```csharp
private void PutCustomPolicy(CesGuardrailLlmPromptSecurityCustomPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `PutDefaultSettings` <a name="PutDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```csharp
private void PutDefaultSettings(CesGuardrailLlmPromptSecurityDefaultSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```csharp
private void ResetCustomPolicy()
```

##### `ResetDefaultSettings` <a name="ResetDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```csharp
private void ResetDefaultSettings()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">DefaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicyOutputReference CustomPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `DefaultSettings`<sup>Required</sup> <a name="DefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```csharp
public CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference DefaultSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```csharp
public CesGuardrailLlmPromptSecurityCustomPolicy CustomPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `DefaultSettingsInput`<sup>Optional</sup> <a name="DefaultSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```csharp
public CesGuardrailLlmPromptSecurityDefaultSettings DefaultSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailLlmPromptSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---


### CesGuardrailModelSafetyOutputReference <a name="CesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailModelSafetyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings">PutSafetySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSafetySettings` <a name="PutSafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```csharp
private void PutSafetySettings(IResolvable|CesGuardrailModelSafetySafetySettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings">SafetySettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput">SafetySettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```csharp
public CesGuardrailModelSafetySafetySettingsList SafetySettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a>

---

##### `SafetySettingsInput`<sup>Optional</sup> <a name="SafetySettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```csharp
public IResolvable|CesGuardrailModelSafetySafetySettings[] SafetySettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```csharp
public CesGuardrailModelSafety InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---


### CesGuardrailModelSafetySafetySettingsList <a name="CesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailModelSafetySafetySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get"></a>

```csharp
private CesGuardrailModelSafetySafetySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```csharp
public IResolvable|CesGuardrailModelSafetySafetySettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>[]

---


### CesGuardrailModelSafetySafetySettingsOutputReference <a name="CesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailModelSafetySafetySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesGuardrailModelSafetySafetySettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>

---


### CesGuardrailTimeoutsOutputReference <a name="CesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesGuardrailTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesGuardrailTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---



