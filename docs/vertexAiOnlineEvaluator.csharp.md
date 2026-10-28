# `vertexAiOnlineEvaluator` Submodule <a name="`vertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google.vertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiOnlineEvaluator <a name="VertexAiOnlineEvaluator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluator(Construct Scope, string Id, VertexAiOnlineEvaluatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig">VertexAiOnlineEvaluatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig">VertexAiOnlineEvaluatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability">PutCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources">PutMetricSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudObservability` <a name="PutCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability"></a>

```csharp
private void PutCloudObservability(VertexAiOnlineEvaluatorCloudObservability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig"></a>

```csharp
private void PutConfig(VertexAiOnlineEvaluatorConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `PutMetricSources` <a name="PutMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources"></a>

```csharp
private void PutMetricSources(IResolvable|VertexAiOnlineEvaluatorMetricSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiOnlineEvaluatorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiOnlineEvaluator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiOnlineEvaluator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiOnlineEvaluator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiOnlineEvaluator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiOnlineEvaluator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability">CloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources">MetricSources</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails">StateDetails</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput">AgentResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput">CloudObservabilityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput">MetricSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource">AgentResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudObservability`<sup>Required</sup> <a name="CloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityOutputReference CloudObservability { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config"></a>

```csharp
public VertexAiOnlineEvaluatorConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MetricSources`<sup>Required</sup> <a name="MetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources"></a>

```csharp
public VertexAiOnlineEvaluatorMetricSourcesList MetricSources { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails"></a>

```csharp
public VertexAiOnlineEvaluatorStateDetailsList StateDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts"></a>

```csharp
public VertexAiOnlineEvaluatorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AgentResourceInput`<sup>Optional</sup> <a name="AgentResourceInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput"></a>

```csharp
public string AgentResourceInput { get; }
```

- *Type:* string

---

##### `CloudObservabilityInput`<sup>Optional</sup> <a name="CloudObservabilityInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservability CloudObservabilityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput"></a>

```csharp
public VertexAiOnlineEvaluatorConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricSourcesInput`<sup>Optional</sup> <a name="MetricSourcesInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorMetricSources[] MetricSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `AgentResource`<sup>Required</sup> <a name="AgentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource"></a>

```csharp
public string AgentResource { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiOnlineEvaluatorCloudObservability <a name="VertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservability {
    VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry OpenTelemetry,
    string LogView = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScope SessionScope = null,
    VertexAiOnlineEvaluatorCloudObservabilityTraceScope TraceScope = null,
    string TraceView = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">OpenTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView">LogView</a></code> | <code>string</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope">SessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope">TraceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView">TraceView</a></code> | <code>string</code> | Optional trace view that will be used to query traces. |

---

##### `OpenTelemetry`<sup>Required</sup> <a name="OpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry OpenTelemetry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}

---

##### `LogView`<sup>Optional</sup> <a name="LogView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```csharp
public string LogView { get; set; }
```

- *Type:* string

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}

---

##### `SessionScope`<sup>Optional</sup> <a name="SessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope SessionScope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}

---

##### `TraceScope`<sup>Optional</sup> <a name="TraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope TraceScope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}

---

##### `TraceView`<sup>Optional</sup> <a name="TraceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```csharp
public string TraceView { get; set; }
```

- *Type:* string

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}

---

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry {
    string SemconvVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">SemconvVersion</a></code> | <code>string</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `SemconvVersion`<sup>Required</sup> <a name="SemconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```csharp
public string SemconvVersion { get; set; }
```

- *Type:* string

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScope {
    IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] Filter = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger InactivityTrigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">InactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

##### `InactivityTrigger`<sup>Optional</sup> <a name="InactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger InactivityTrigger { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter {
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration Duration = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors ModelCallErrors = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls ModelCalls = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors ToolCallErrors = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls ToolCalls = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage TotalTokenUsage = null,
    VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns UserTurns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">Duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">ModelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">ModelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">ToolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">ToolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">TotalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">UserTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration Duration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `ModelCallErrors`<sup>Optional</sup> <a name="ModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors ModelCallErrors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#model_call_errors VertexAiOnlineEvaluator#model_call_errors}

---

##### `ModelCalls`<sup>Optional</sup> <a name="ModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls ModelCalls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#model_calls VertexAiOnlineEvaluator#model_calls}

---

##### `ToolCallErrors`<sup>Optional</sup> <a name="ToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors ToolCallErrors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#tool_call_errors VertexAiOnlineEvaluator#tool_call_errors}

---

##### `ToolCalls`<sup>Optional</sup> <a name="ToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls ToolCalls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#tool_calls VertexAiOnlineEvaluator#tool_calls}

---

##### `TotalTokenUsage`<sup>Optional</sup> <a name="TotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage TotalTokenUsage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

##### `UserTurns`<sup>Optional</sup> <a name="UserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns UserTurns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#user_turns VertexAiOnlineEvaluator#user_turns}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger {
    string Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">Threshold</a></code> | <code>string</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScope {
    IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | filter block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter {
    VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration Duration = null,
    VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage TotalTokenUsage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">Duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">TotalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration Duration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `TotalTokenUsage`<sup>Optional</sup> <a name="TotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage TotalTokenUsage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage {
    string ComparisonOperator,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">Value</a></code> | <code>double</code> | The value to compare against. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorConfig <a name="VertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentResource,
    VertexAiOnlineEvaluatorCloudObservability CloudObservability,
    VertexAiOnlineEvaluatorConfigA Config,
    IResolvable|VertexAiOnlineEvaluatorMetricSources[] MetricSources,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    string Region = null,
    VertexAiOnlineEvaluatorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource">AgentResource</a></code> | <code>string</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability">CloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources">MetricSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region">Region</a></code> | <code>string</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentResource`<sup>Required</sup> <a name="AgentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```csharp
public string AgentResource { get; set; }
```

- *Type:* string

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `CloudObservability`<sup>Required</sup> <a name="CloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservability CloudObservability { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config"></a>

```csharp
public VertexAiOnlineEvaluatorConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `MetricSources`<sup>Required</sup> <a name="MetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorMetricSources[] MetricSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```csharp
public VertexAiOnlineEvaluatorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

### VertexAiOnlineEvaluatorConfigA <a name="VertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorConfigA {
    string MaxEvaluatedSamplesPerRun = null,
    VertexAiOnlineEvaluatorConfigRandomSampling RandomSampling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">MaxEvaluatedSamplesPerRun</a></code> | <code>string</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling">RandomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `MaxEvaluatedSamplesPerRun`<sup>Optional</sup> <a name="MaxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```csharp
public string MaxEvaluatedSamplesPerRun { get; set; }
```

- *Type:* string

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `RandomSampling`<sup>Optional</sup> <a name="RandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```csharp
public VertexAiOnlineEvaluatorConfigRandomSampling RandomSampling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}

---

### VertexAiOnlineEvaluatorConfigRandomSampling <a name="VertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorConfigRandomSampling {
    double Percentage
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">Percentage</a></code> | <code>double</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}

---

### VertexAiOnlineEvaluatorMetricSources <a name="VertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorMetricSources {
    string Metric = null,
    string MetricResourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric">Metric</a></code> | <code>string</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName">MetricResourceName</a></code> | <code>string</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric VertexAiOnlineEvaluator#metric}

---

##### `MetricResourceName`<sup>Optional</sup> <a name="MetricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```csharp
public string MetricResourceName { get; set; }
```

- *Type:* string

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric_resource_name VertexAiOnlineEvaluator#metric_resource_name}

---

### VertexAiOnlineEvaluatorStateDetails <a name="VertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorStateDetails {

};
```


### VertexAiOnlineEvaluatorTimeouts <a name="VertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">SemconvVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">SemconvVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SemconvVersionInput`<sup>Optional</sup> <a name="SemconvVersionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```csharp
public string SemconvVersionInput { get; }
```

- *Type:* string

---

##### `SemconvVersion`<sup>Required</sup> <a name="SemconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```csharp
public string SemconvVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">PutOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">PutSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">PutTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">ResetLogView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">ResetSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">ResetTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">ResetTraceView</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenTelemetry` <a name="PutOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```csharp
private void PutOpenTelemetry(VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `PutSessionScope` <a name="PutSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```csharp
private void PutSessionScope(VertexAiOnlineEvaluatorCloudObservabilitySessionScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `PutTraceScope` <a name="PutTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```csharp
private void PutTraceScope(VertexAiOnlineEvaluatorCloudObservabilityTraceScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `ResetLogView` <a name="ResetLogView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```csharp
private void ResetLogView()
```

##### `ResetSessionScope` <a name="ResetSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```csharp
private void ResetSessionScope()
```

##### `ResetTraceScope` <a name="ResetTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```csharp
private void ResetTraceScope()
```

##### `ResetTraceView` <a name="ResetTraceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```csharp
private void ResetTraceView()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">OpenTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">SessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">TraceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">LogViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">OpenTelemetryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">SessionScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">TraceScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">TraceViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">LogView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">TraceView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenTelemetry`<sup>Required</sup> <a name="OpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference OpenTelemetry { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `SessionScope`<sup>Required</sup> <a name="SessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference SessionScope { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `TraceScope`<sup>Required</sup> <a name="TraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference TraceScope { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `LogViewInput`<sup>Optional</sup> <a name="LogViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```csharp
public string LogViewInput { get; }
```

- *Type:* string

---

##### `OpenTelemetryInput`<sup>Optional</sup> <a name="OpenTelemetryInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry OpenTelemetryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `SessionScopeInput`<sup>Optional</sup> <a name="SessionScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope SessionScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `TraceScopeInput`<sup>Optional</sup> <a name="TraceScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope TraceScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `TraceViewInput`<sup>Optional</sup> <a name="TraceViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```csharp
public string TraceViewInput { get; }
```

- *Type:* string

---

##### `LogView`<sup>Required</sup> <a name="LogView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```csharp
public string LogView { get; }
```

- *Type:* string

---

##### `TraceView`<sup>Required</sup> <a name="TraceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```csharp
public string TraceView { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservability InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```csharp
private VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">PutDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">PutModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">PutModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">PutToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">PutToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">PutTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">PutUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">ResetModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">ResetModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">ResetToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">ResetToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">ResetTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">ResetUserTurns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```csharp
private void PutDuration(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `PutModelCallErrors` <a name="PutModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```csharp
private void PutModelCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `PutModelCalls` <a name="PutModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```csharp
private void PutModelCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `PutToolCallErrors` <a name="PutToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```csharp
private void PutToolCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `PutToolCalls` <a name="PutToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```csharp
private void PutToolCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `PutTotalTokenUsage` <a name="PutTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```csharp
private void PutTotalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `PutUserTurns` <a name="PutUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```csharp
private void PutUserTurns(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetModelCallErrors` <a name="ResetModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```csharp
private void ResetModelCallErrors()
```

##### `ResetModelCalls` <a name="ResetModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```csharp
private void ResetModelCalls()
```

##### `ResetToolCallErrors` <a name="ResetToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```csharp
private void ResetToolCallErrors()
```

##### `ResetToolCalls` <a name="ResetToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```csharp
private void ResetToolCalls()
```

##### `ResetTotalTokenUsage` <a name="ResetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```csharp
private void ResetTotalTokenUsage()
```

##### `ResetUserTurns` <a name="ResetUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```csharp
private void ResetUserTurns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">ModelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">ModelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">ToolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">ToolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">TotalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">UserTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">ModelCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">ModelCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">ToolCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">ToolCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">TotalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">UserTurnsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference Duration { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `ModelCallErrors`<sup>Required</sup> <a name="ModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference ModelCallErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `ModelCalls`<sup>Required</sup> <a name="ModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference ModelCalls { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `ToolCallErrors`<sup>Required</sup> <a name="ToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference ToolCallErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `ToolCalls`<sup>Required</sup> <a name="ToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference ToolCalls { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `TotalTokenUsage`<sup>Required</sup> <a name="TotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference TotalTokenUsage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `UserTurns`<sup>Required</sup> <a name="UserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference UserTurns { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration DurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `ModelCallErrorsInput`<sup>Optional</sup> <a name="ModelCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors ModelCallErrorsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `ModelCallsInput`<sup>Optional</sup> <a name="ModelCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls ModelCallsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `ToolCallErrorsInput`<sup>Optional</sup> <a name="ToolCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors ToolCallErrorsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `ToolCallsInput`<sup>Optional</sup> <a name="ToolCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls ToolCallsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `TotalTokenUsageInput`<sup>Optional</sup> <a name="TotalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage TotalTokenUsageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `UserTurnsInput`<sup>Optional</sup> <a name="UserTurnsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns UserTurnsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">PutInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">ResetInactivityTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```csharp
private void PutFilter(IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `PutInactivityTrigger` <a name="PutInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```csharp
private void PutInactivityTrigger(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetInactivityTrigger` <a name="ResetInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```csharp
private void ResetInactivityTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">InactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">InactivityTriggerInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `InactivityTrigger`<sup>Required</sup> <a name="InactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference InactivityTrigger { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `InactivityTriggerInput`<sup>Optional</sup> <a name="InactivityTriggerInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger InactivityTriggerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```csharp
private VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">PutDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">PutTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">ResetTotalTokenUsage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```csharp
private void PutDuration(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `PutTotalTokenUsage` <a name="PutTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```csharp
private void PutTotalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetTotalTokenUsage` <a name="ResetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```csharp
private void ResetTotalTokenUsage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">TotalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">TotalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference Duration { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `TotalTokenUsage`<sup>Required</sup> <a name="TotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference TotalTokenUsage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration DurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `TotalTokenUsageInput`<sup>Optional</sup> <a name="TotalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage TotalTokenUsageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```csharp
private void PutFilter(IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### VertexAiOnlineEvaluatorConfigAOutputReference <a name="VertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">PutRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">ResetMaxEvaluatedSamplesPerRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">ResetRandomSampling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRandomSampling` <a name="PutRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```csharp
private void PutRandomSampling(VertexAiOnlineEvaluatorConfigRandomSampling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `ResetMaxEvaluatedSamplesPerRun` <a name="ResetMaxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```csharp
private void ResetMaxEvaluatedSamplesPerRun()
```

##### `ResetRandomSampling` <a name="ResetRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```csharp
private void ResetRandomSampling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">RandomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">MaxEvaluatedSamplesPerRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">RandomSamplingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">MaxEvaluatedSamplesPerRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RandomSampling`<sup>Required</sup> <a name="RandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```csharp
public VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference RandomSampling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `MaxEvaluatedSamplesPerRunInput`<sup>Optional</sup> <a name="MaxEvaluatedSamplesPerRunInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```csharp
public string MaxEvaluatedSamplesPerRunInput { get; }
```

- *Type:* string

---

##### `RandomSamplingInput`<sup>Optional</sup> <a name="RandomSamplingInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```csharp
public VertexAiOnlineEvaluatorConfigRandomSampling RandomSamplingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `MaxEvaluatedSamplesPerRun`<sup>Required</sup> <a name="MaxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```csharp
public string MaxEvaluatedSamplesPerRun { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---


### VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorConfigRandomSampling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### VertexAiOnlineEvaluatorMetricSourcesList <a name="VertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorMetricSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```csharp
private VertexAiOnlineEvaluatorMetricSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorMetricSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---


### VertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="VertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorMetricSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">ResetMetricResourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMetricResourceName` <a name="ResetMetricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```csharp
private void ResetMetricResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">MetricResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">MetricResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `MetricResourceNameInput`<sup>Optional</sup> <a name="MetricResourceNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```csharp
public string MetricResourceNameInput { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `MetricResourceName`<sup>Required</sup> <a name="MetricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```csharp
public string MetricResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorMetricSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>

---


### VertexAiOnlineEvaluatorStateDetailsList <a name="VertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorStateDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get"></a>

```csharp
private VertexAiOnlineEvaluatorStateDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiOnlineEvaluatorStateDetailsOutputReference <a name="VertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorStateDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```csharp
public VertexAiOnlineEvaluatorStateDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a>

---


### VertexAiOnlineEvaluatorTimeoutsOutputReference <a name="VertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiOnlineEvaluatorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiOnlineEvaluatorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---



