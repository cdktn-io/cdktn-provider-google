# `computeRegionHealthAggregationPolicy` Submodule <a name="`computeRegionHealthAggregationPolicy` Submodule" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthAggregationPolicy <a name="ComputeRegionHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy google_compute_region_health_aggregation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionHealthAggregationPolicy(Construct Scope, string Id, ComputeRegionHealthAggregationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold">ResetHealthyPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold">ResetMinHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionHealthAggregationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthyPercentThreshold` <a name="ResetHealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold"></a>

```csharp
private void ResetHealthyPercentThreshold()
```

##### `ResetMinHealthyThreshold` <a name="ResetMinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold"></a>

```csharp
private void ResetMinHealthyThreshold()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionHealthAggregationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionHealthAggregationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionHealthAggregationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionHealthAggregationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionHealthAggregationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionHealthAggregationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthAggregationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput">HealthyPercentThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput">MinHealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold">HealthyPercentThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold">MinHealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts"></a>

```csharp
public ComputeRegionHealthAggregationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HealthyPercentThresholdInput`<sup>Optional</sup> <a name="HealthyPercentThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput"></a>

```csharp
public double HealthyPercentThresholdInput { get; }
```

- *Type:* double

---

##### `MinHealthyThresholdInput`<sup>Optional</sup> <a name="MinHealthyThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput"></a>

```csharp
public double MinHealthyThresholdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeRegionHealthAggregationPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthyPercentThreshold`<sup>Required</sup> <a name="HealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold"></a>

```csharp
public double HealthyPercentThreshold { get; }
```

- *Type:* double

---

##### `MinHealthyThreshold`<sup>Required</sup> <a name="MinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold"></a>

```csharp
public double MinHealthyThreshold { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthAggregationPolicyConfig <a name="ComputeRegionHealthAggregationPolicyConfig" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionHealthAggregationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Region,
    string DeletionPolicy = null,
    string Description = null,
    double HealthyPercentThreshold = null,
    double MinHealthyThreshold = null,
    string PolicyType = null,
    string Project = null,
    ComputeRegionHealthAggregationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold">HealthyPercentThreshold</a></code> | <code>double</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold">MinHealthyThreshold</a></code> | <code>double</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `HealthyPercentThreshold`<sup>Optional</sup> <a name="HealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold"></a>

```csharp
public double HealthyPercentThreshold { get; set; }
```

- *Type:* double

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the threshold (as a
percentage) of healthy endpoints required in order to consider the
aggregated health result HEALTHY. Defaults to '60'. Must be in
range [0, 100]. Not applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'minHealthyThreshold' must be satisfied in order
for HEALTHY to be the aggregated result. "Endpoints" refers to network
endpoints within a Network Endpoint Group or instances within an Instance
Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `MinHealthyThreshold`<sup>Optional</sup> <a name="MinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold"></a>

```csharp
public double MinHealthyThreshold { get; set; }
```

- *Type:* double

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the minimum number of
healthy endpoints required in order to consider the aggregated health
result HEALTHY. Defaults to '1'. Must be positive. Not
applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'healthyPercentThreshold' must be satisfied in
order for HEALTHY to be the aggregated result. "Endpoints" refers to
network endpoints within a Network Endpoint Group or instances within an
Instance Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts"></a>

```csharp
public ComputeRegionHealthAggregationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

### ComputeRegionHealthAggregationPolicyTimeouts <a name="ComputeRegionHealthAggregationPolicyTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionHealthAggregationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthAggregationPolicyTimeoutsOutputReference <a name="ComputeRegionHealthAggregationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionHealthAggregationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeRegionHealthAggregationPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---



