# `spannerInstancePartition` Submodule <a name="`spannerInstancePartition` Submodule" id="@cdktn/provider-google.spannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstancePartition <a name="SpannerInstancePartition" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartition(Construct Scope, string Id, SpannerInstancePartitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits">ResetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig"></a>

```csharp
private void PutAutoscalingConfig(SpannerInstancePartitionAutoscalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts"></a>

```csharp
private void PutTimeouts(SpannerInstancePartitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig"></a>

```csharp
private void ResetAutoscalingConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetProcessingUnits` <a name="ResetProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits"></a>

```csharp
private void ResetProcessingUnits()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SpannerInstancePartition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SpannerInstancePartition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SpannerInstancePartition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SpannerInstancePartition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpannerInstancePartition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput">ConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput">ProcessingUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits">ProcessingUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigOutputReference AutoscalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts"></a>

```csharp
public SpannerInstancePartitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfig AutoscalingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput"></a>

```csharp
public string ConfigInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `ProcessingUnitsInput`<sup>Optional</sup> <a name="ProcessingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput"></a>

```csharp
public double ProcessingUnitsInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput"></a>

```csharp
public IResolvable|SpannerInstancePartitionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ProcessingUnits`<sup>Required</sup> <a name="ProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits"></a>

```csharp
public double ProcessingUnits { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstancePartitionAutoscalingConfig <a name="SpannerInstancePartitionAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfig {
    SpannerInstancePartitionAutoscalingConfigAutoscalingLimits AutoscalingLimits = null,
    SpannerInstancePartitionAutoscalingConfigAutoscalingTargets AutoscalingTargets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `AutoscalingLimits`<sup>Optional</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingLimits AutoscalingLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#autoscaling_limits SpannerInstancePartition#autoscaling_limits}

---

##### `AutoscalingTargets`<sup>Optional</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingTargets AutoscalingTargets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#autoscaling_targets SpannerInstancePartition#autoscaling_targets}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimits <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfigAutoscalingLimits {
    double MaxNodes = null,
    double MaxProcessingUnits = null,
    double MinNodes = null,
    double MinProcessingUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes">MaxNodes</a></code> | <code>double</code> | Specifies maximum number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>double</code> | Specifies maximum number of processing units allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes">MinNodes</a></code> | <code>double</code> | Specifies number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>double</code> | Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```csharp
public double MaxNodes { get; set; }
```

- *Type:* double

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#max_nodes SpannerInstancePartition#max_nodes}

---

##### `MaxProcessingUnits`<sup>Optional</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```csharp
public double MaxProcessingUnits { get; set; }
```

- *Type:* double

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#max_processing_units SpannerInstancePartition#max_processing_units}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```csharp
public double MinNodes { get; set; }
```

- *Type:* double

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#min_nodes SpannerInstancePartition#min_nodes}

---

##### `MinProcessingUnits`<sup>Optional</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```csharp
public double MinProcessingUnits { get; set; }
```

- *Type:* double

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#min_processing_units SpannerInstancePartition#min_processing_units}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingTargets <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfigAutoscalingTargets {
    double HighPriorityCpuUtilizationPercent = null,
    double StorageUtilizationPercent = null,
    double TotalCpuUtilizationPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>double</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>double</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>double</code> | Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |

---

##### `HighPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```csharp
public double HighPriorityCpuUtilizationPercent { get; set; }
```

- *Type:* double

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#high_priority_cpu_utilization_percent SpannerInstancePartition#high_priority_cpu_utilization_percent}

---

##### `StorageUtilizationPercent`<sup>Optional</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```csharp
public double StorageUtilizationPercent { get; set; }
```

- *Type:* double

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#storage_utilization_percent SpannerInstancePartition#storage_utilization_percent}

---

##### `TotalCpuUtilizationPercent`<sup>Optional</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```csharp
public double TotalCpuUtilizationPercent { get; set; }
```

- *Type:* double

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#total_cpu_utilization_percent SpannerInstancePartition#total_cpu_utilization_percent}

---

### SpannerInstancePartitionConfig <a name="SpannerInstancePartitionConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Config,
    string DisplayName,
    string Instance,
    string Name,
    SpannerInstancePartitionAutoscalingConfig AutoscalingConfig = null,
    string Id = null,
    double NodeCount = null,
    double ProcessingUnits = null,
    string Project = null,
    SpannerInstancePartitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config">Config</a></code> | <code>string</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance">Instance</a></code> | <code>string</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name">Name</a></code> | <code>string</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits">ProcessingUnits</a></code> | <code>double</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config"></a>

```csharp
public string Config { get; set; }
```

- *Type:* string

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfig AutoscalingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#autoscaling_config SpannerInstancePartition#autoscaling_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `ProcessingUnits`<sup>Optional</sup> <a name="ProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits"></a>

```csharp
public double ProcessingUnits { get; set; }
```

- *Type:* double

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts"></a>

```csharp
public SpannerInstancePartitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

### SpannerInstancePartitionTimeouts <a name="SpannerInstancePartitionTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">ResetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">ResetMinProcessingUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```csharp
private void ResetMaxNodes()
```

##### `ResetMaxProcessingUnits` <a name="ResetMaxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```csharp
private void ResetMaxProcessingUnits()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```csharp
private void ResetMinNodes()
```

##### `ResetMinProcessingUnits` <a name="ResetMinProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```csharp
private void ResetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">MaxProcessingUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">MinProcessingUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```csharp
public double MaxNodesInput { get; }
```

- *Type:* double

---

##### `MaxProcessingUnitsInput`<sup>Optional</sup> <a name="MaxProcessingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```csharp
public double MaxProcessingUnitsInput { get; }
```

- *Type:* double

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```csharp
public double MinNodesInput { get; }
```

- *Type:* double

---

##### `MinProcessingUnitsInput`<sup>Optional</sup> <a name="MinProcessingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```csharp
public double MinProcessingUnitsInput { get; }
```

- *Type:* double

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MaxProcessingUnits`<sup>Required</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```csharp
public double MaxProcessingUnits { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `MinProcessingUnits`<sup>Required</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```csharp
public double MinProcessingUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">ResetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">ResetStorageUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">ResetTotalCpuUtilizationPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHighPriorityCpuUtilizationPercent` <a name="ResetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```csharp
private void ResetHighPriorityCpuUtilizationPercent()
```

##### `ResetStorageUtilizationPercent` <a name="ResetStorageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```csharp
private void ResetStorageUtilizationPercent()
```

##### `ResetTotalCpuUtilizationPercent` <a name="ResetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```csharp
private void ResetTotalCpuUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">HighPriorityCpuUtilizationPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">StorageUtilizationPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">TotalCpuUtilizationPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HighPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```csharp
public double HighPriorityCpuUtilizationPercentInput { get; }
```

- *Type:* double

---

##### `StorageUtilizationPercentInput`<sup>Optional</sup> <a name="StorageUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```csharp
public double StorageUtilizationPercentInput { get; }
```

- *Type:* double

---

##### `TotalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="TotalCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```csharp
public double TotalCpuUtilizationPercentInput { get; }
```

- *Type:* double

---

##### `HighPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```csharp
public double HighPriorityCpuUtilizationPercent { get; }
```

- *Type:* double

---

##### `StorageUtilizationPercent`<sup>Required</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```csharp
public double StorageUtilizationPercent { get; }
```

- *Type:* double

---

##### `TotalCpuUtilizationPercent`<sup>Required</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```csharp
public double TotalCpuUtilizationPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstancePartitionAutoscalingConfigOutputReference <a name="SpannerInstancePartitionAutoscalingConfigOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionAutoscalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits">PutAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets">PutAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits">ResetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets">ResetAutoscalingTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingLimits` <a name="PutAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```csharp
private void PutAutoscalingLimits(SpannerInstancePartitionAutoscalingConfigAutoscalingLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `PutAutoscalingTargets` <a name="PutAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```csharp
private void PutAutoscalingTargets(SpannerInstancePartitionAutoscalingConfigAutoscalingTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `ResetAutoscalingLimits` <a name="ResetAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```csharp
private void ResetAutoscalingLimits()
```

##### `ResetAutoscalingTargets` <a name="ResetAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```csharp
private void ResetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput">AutoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput">AutoscalingTargetsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingLimits`<sup>Required</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference AutoscalingLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `AutoscalingTargets`<sup>Required</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference AutoscalingTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `AutoscalingLimitsInput`<sup>Optional</sup> <a name="AutoscalingLimitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingLimits AutoscalingLimitsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `AutoscalingTargetsInput`<sup>Optional</sup> <a name="AutoscalingTargetsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfigAutoscalingTargets AutoscalingTargetsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue"></a>

```csharp
public SpannerInstancePartitionAutoscalingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---


### SpannerInstancePartitionTimeoutsOutputReference <a name="SpannerInstancePartitionTimeoutsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SpannerInstancePartitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SpannerInstancePartitionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---



