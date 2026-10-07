# `vertexAiSemanticGovernancePolicy` Submodule <a name="`vertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSemanticGovernancePolicy <a name="VertexAiSemanticGovernancePolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicy(Construct Scope, string Id, VertexAiSemanticGovernancePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization">PutAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools">PutMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">ResetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools">ResetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentResponseCustomization` <a name="PutAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```csharp
private void PutAgentResponseCustomization(VertexAiSemanticGovernancePolicyAgentResponseCustomization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `PutMcpTools` <a name="PutMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools"></a>

```csharp
private void PutMcpTools(VertexAiSemanticGovernancePolicyMcpTools Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiSemanticGovernancePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `ResetAgentResponseCustomization` <a name="ResetAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```csharp
private void ResetAgentResponseCustomization()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMcpTools` <a name="ResetMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```csharp
private void ResetMcpTools()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiSemanticGovernancePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiSemanticGovernancePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiSemanticGovernancePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiSemanticGovernancePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiSemanticGovernancePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity">AgentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">AgentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput">McpToolsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">NaturalLanguageConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">SemanticGovernancePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentIdentity`<sup>Required</sup> <a name="AgentIdentity" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```csharp
public string AgentIdentity { get; }
```

- *Type:* string

---

##### `AgentResponseCustomization`<sup>Required</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```csharp
public VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference AgentResponseCustomization { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `McpTools`<sup>Required</sup> <a name="McpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```csharp
public VertexAiSemanticGovernancePolicyMcpToolsOutputReference McpTools { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts"></a>

```csharp
public VertexAiSemanticGovernancePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `AgentResponseCustomizationInput`<sup>Optional</sup> <a name="AgentResponseCustomizationInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```csharp
public VertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomizationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `McpToolsInput`<sup>Optional</sup> <a name="McpToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```csharp
public VertexAiSemanticGovernancePolicyMcpTools McpToolsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `NaturalLanguageConstraintInput`<sup>Optional</sup> <a name="NaturalLanguageConstraintInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```csharp
public string NaturalLanguageConstraintInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SemanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="SemanticGovernancePolicyIdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```csharp
public string SemanticGovernancePolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiSemanticGovernancePolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```csharp
public string NaturalLanguageConstraint { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```csharp
public string SemanticGovernancePolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyAgentResponseCustomization {
    string DenialMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">DenialMessage</a></code> | <code>string</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `DenialMessage`<sup>Optional</sup> <a name="DenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```csharp
public string DenialMessage { get; set; }
```

- *Type:* string

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#denial_message VertexAiSemanticGovernancePolicy#denial_message}

---

### VertexAiSemanticGovernancePolicyConfig <a name="VertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Agent,
    string NaturalLanguageConstraint,
    string SemanticGovernancePolicyId,
    VertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomization = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    VertexAiSemanticGovernancePolicyMcpTools McpTools = null,
    string Project = null,
    string Region = null,
    VertexAiSemanticGovernancePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent">Agent</a></code> | <code>string</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>string</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>string</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description">Description</a></code> | <code>string</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region">Region</a></code> | <code>string</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```csharp
public string NaturalLanguageConstraint { get; set; }
```

- *Type:* string

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```csharp
public string SemanticGovernancePolicyId { get; set; }
```

- *Type:* string

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `AgentResponseCustomization`<sup>Optional</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```csharp
public VertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `McpTools`<sup>Optional</sup> <a name="McpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```csharp
public VertexAiSemanticGovernancePolicyMcpTools McpTools { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```csharp
public VertexAiSemanticGovernancePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}

---

### VertexAiSemanticGovernancePolicyMcpTools <a name="VertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyMcpTools {
    string McpServer,
    string[] Tools
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">McpServer</a></code> | <code>string</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools">Tools</a></code> | <code>string[]</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```csharp
public string McpServer { get; set; }
```

- *Type:* string

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_server VertexAiSemanticGovernancePolicy#mcp_server}

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#tools VertexAiSemanticGovernancePolicy#tools}

---

### VertexAiSemanticGovernancePolicyTimeouts <a name="VertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">ResetDenialMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDenialMessage` <a name="ResetDenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```csharp
private void ResetDenialMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">DenialMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">DenialMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DenialMessageInput`<sup>Optional</sup> <a name="DenialMessageInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```csharp
public string DenialMessageInput { get; }
```

- *Type:* string

---

##### `DenialMessage`<sup>Required</sup> <a name="DenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```csharp
public string DenialMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```csharp
public VertexAiSemanticGovernancePolicyAgentResponseCustomization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### VertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="VertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyMcpToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">McpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```csharp
public string McpServerInput { get; }
```

- *Type:* string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```csharp
public string McpServer { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```csharp
public VertexAiSemanticGovernancePolicyMcpTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---


### VertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="VertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiSemanticGovernancePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiSemanticGovernancePolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---



